# Word Sense Disambiguation wrapper

In natural language processing **word sense disambiguation** (WSD) is the problem of determining which "sense" (meaning) of a word is activated by the use of the word in a particular context, a process which appears to be largely unconscious in people.

This is a simple library that wrap two WSD methods: NLTK and Babelfy. 

## Requirements
You should run 
```bash
pip3 install xmltodict
pip3 install nltk
pip3 install pywsd
```
The NLTK library requires more extra configurations, see this [link](https://pythonprogramming.net/installing-nltk-nlp-python/) to more details.

## Methods
The ```wsdNLTK``` methods call the function ```pywsd.disambiguate``` which returns a mapping between words of the input text and their WornNet Synsets. 
```python
wsd = WrapperWSD()
wsd.wsdNLTK(u'My sister has a dog. She loves him.')
#output: [('sister', Synset('sister.n.02'), 3, 9), ('dog', Synset('pawl.n.01'), 16, 19), ('loves', Synset('sleep_together.v.01'), 25, 30)]
```

Instead of returning the WornNet Synsets, the method ```wsdNLTK_offset``` returns a mapping between words of the input text and their WornNet offset.  

```python
wsd.wsdNLTK_offset(u'My sister has a dog. She loves him.')
#output: [('president', 597265, 21, 30), ('USA', 8394922, 38, 41), ('best', 67379, 54, 58)]
```

A mapping between WordNet and Wikipedia was proposed in  **[Miller et al]** available for download [here](https://www.informatik.tu-darmstadt.de/media/ukp/data/fileupload_2/lexical_resources/MillerGurevych2014_alignment.tar_1.zip).  In the next example you can see some key-values of it.

```python
wd2wiki = {
 1740: 'https://en.wikipedia.org/wiki/Madison_Square_Garden,_L.P.',
 2137: 'https://en.wikipedia.org/wiki/Abstraction',
 2452: 'https://en.wikipedia.org/wiki/Object_(philosophy)',
 2684: 'https://en.wikipedia.org/wiki/Computer_file',
 3553: 'https://en.wikipedia.org/wiki/Unit_of_alcohol',
 ...
 }
```

We used this mapping to link entities from Wikipedia for those cases where exists a correspondence.

```python
wsd.wsdNLTK_links(u'My sister has a dog. She loves him.')
#output: [{'start': 38, 'end': 41, 'label': 'USA', 'link': 'United_States_Army'}]
```

On the other hand, we include Babelfy targetting BabelSynsets
```python
wsd.wsdBabelfy(u'My sister has a dog. She loves him.')
#output: [('sister', 'bn:00071838n', 3, 9), ('dog', 'bn:00015267n', 16, 19), ('loves', 'bn:00090504v', 25, 30)]
```


## Combining the output with Entity Linking

You can use the [nifwrapper](https://github.com/henryrosalesmendez/nifwrapper) library in order to merge the WSD outputs with Entity Linking annotations.

```python
from wrapperWSD import WrapperWSD
from nifwrapper import *


#---- Obtaining disambiguation
wsd = WrapperWSD()
corefWSD = wsd.wsdNLTK_links(u'My sister has a dog. She loves him.')
print("corefWSD:",corefWSD)
#output: [('sister', Synset('sister.n.02'), 3, 9), ('dog', Synset('pawl.n.01'), 16, 19), ('loves', Synset('sleep_together.v.01'), 25, 30)]


#---- Obtaining Entity Linking results
# inline NIF corpus creation
wrp = NIFWrapper()
doc = NIFDocument("https://example.org/doc1")
#--
sent = NIFSentence("https://example.org/doc1#char=0,19")
sent.addAttribute("nif:beginIndex","0","xsd:nonNegativeInteger")
sent.addAttribute("nif:endIndex","19","xsd:nonNegativeInteger")
sent.addAttribute("nif:isString","My sister has a dog.","xsd:string")
sent.addAttribute("nif:broaderContext",["https://example.org/doc1"],"URI LIST")


#-- 
a1 = NIFAnnotation("https://example.org/doc1#char=3,9", "3", "9", ["https://en.wikipedia.org/wiki/Sibling"], ["dbo:FamilyRelations"])
a1.addAttribute("nif:anchorOf","sister","xsd:string")
sent.pushAnnotation(a1)
doc.pushSentence(sent)

#--
sent2 = NIFSentence("https://example.org/doc1#char=21,35")
sent2.addAttribute("nif:isString","She loves him.","xsd:string")
sent2.addAttribute("nif:broaderContext",["https://example.org/doc1"],"URI LIST")
sent2.addAttribute("nif:beginIndex","21","xsd:nonNegativeInteger")
sent2.addAttribute("nif:endIndex","35","xsd:nonNegativeInteger")
doc.pushSentence(sent2)
#--
wrp.pushDocument(doc)

#---- Combining EL annotations with coreferences 
wrp.extendsDocWithWSD(corefWSD, doc.uri)
print(wrp.toString())
```




## Reference

**[Miller et al]**  *WordNet–Wikipedia–Wiktionary: Construction of a Three-way Alignment*. Tristan Miller and Iryna Gurevych. 2014 [https://pdfs.semanticscholar.org/90cd/22a9cd59dc1fc21f4ec36e9c7d95085f7fb6.pdf](https://pdfs.semanticscholar.org/90cd/22a9cd59dc1fc21f4ec36e9c7d95085f7fb6.pdf)
