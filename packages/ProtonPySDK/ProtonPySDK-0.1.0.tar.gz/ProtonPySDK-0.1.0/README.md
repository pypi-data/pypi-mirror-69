# Proton SDK
[![HitCount](http://hits.dwyl.com/GrowtopiaAI/ProtonPySDK.svg)](http://hits.dwyl.com/GrowtopiaAI/ProtonPySDK)<br/>
This is a rewrite module from various languages to Python<br/>
Proton made by Seth A. Robinson which is an old school game designer
who design and code an MMO game, Growtopia. (with Mike Hommel also!)<br/>
This package writen in **Vanilla Python 3.8**
<br/>
## Installation
`pip3 install ProtonPySDK`
## Simple Usage
```
>>> import Proton
>>> 
>>> myData = Proton.Data()
>>> myData.set("Hello", "world")
>>> myData.serialize()
"Hello|world"
>>> myData.toDict()
{"Hello": "world"}
>>> myData.set("number",60)
>>> myData.toDict()
{"Hello": "world", "number": 60}
>>> myData.get("number")
60
>> myData.loads("action|connect\n\rmessage|hello there\n\rid|118233")
>> myData.toDict()
{"action": "connect", "message": "hello there", "id": 118233}
```