# allosaurus_private
Allosaurus is a universal phone recognizer

Allosaurus (allophone system of automatic recognition for universal speech)
![Architecture](arch.png?raw=true "Architecture")


## Install
Allosaurus is available from pip
```bash
pip install allosaurus
```

We also release a numpy version for allosaurus in case you only use CPU and do not want to change your pytorch version.
The inference speed is almost equal.

```bash
pip install allosaurus-numpy
```
 


You can also clone this repository 
```bash
git clone git@github.com:xinjli/allosaurus.git
```

## Tutorial
The target should be a wav file. 

```bash
python inference.py [-l <lang_id> -m <model>] <audio>
```


## Audio
The target audio should be a wav file. 

If the audio is not in the wav format, please convert your audio to a wav format using sox

```bash
sox input output
```

## Language
lang_id should be the language id. It is to specify the language inventory you want to recognize.
The default option is `ipa` which the recognizer use the the entire inventory.  The full language list is here.

| Code        | Language (Script)       |
|-------------|-------------------------|
| aar-Latn    | Afar                    |
| amh-Ethi    | Amharic                 |
| ara-Arab    | Literary Arabic         |
| aze-Cyrl    | Azerbaijani (Cyrillic)  |
| aze-Latn    | Azerbaijani (Latin)     |
| ben-Beng    | Bengali                 |
| ben-Beng-red| Bengali (reduced)       |
| cat-Latn    | Catalan                 |
| ceb-Latn    | Cebuano                 |
| cmn-Hans    | Mandarin (Simplified)\* |
| cmn-Hant    | Mandarin (Traditional)\*|
| ckb-Arab    | Sorani                  |
| deu-Latn    | German                  |
| deu-Latn-np | German†                 |
| deu-Latn-nar| German (more phonetic)  |
| eng-Latn    | English‡                |
| fas-Arab    | Farsi (Perso-Arabic)    |
| fra-Latn    | French                  |
| fra-Latn-np | French†                 |
| hau-Latn    | Hausa                   |
| hin-Deva    | Hindi                   |
| hun-Latn    | Hungarian               |
| ilo-Latn    | Ilocano                 |
| ind-Latn    | Indonesian              |
| ita-Latn    | Italian                 |
| jav-Latn    | Javanese                |
| kaz-Cyrl    | Kazakh (Cyrillic)       |
| kaz-Latn    | Kazakh (Latin)          |
| kin-Latn    | Kinyarwanda             |
| kir-Arab    | Kyrgyz (Perso-Arabic)   |
| kir-Cyrl    | Kyrgyz (Cyrillic)       |
| kir-Latn    | Kyrgyz (Latin)          |
| kmr-Latn    | Kurmanji                |
| lao-Laoo    | Lao                     |
| mar-Deva    | Marathi                 |
| mlt-Latn    | Maltese                 |
| mya-Mymr    | Burmese                 |
| msa-Latn    | Malay                   |
| nld-Latn    | Dutch                   |
| nya-Latn    | Chichewa                |
| orm-Latn    | Oromo                   |
| pan-Guru    | Punjabi (Eastern)       |
| pol-Latn    | Polish                  |
| por-Latn    | Portuguese              |
| ron-Latn    | Romanian                |
| rus-Cyrl    | Russian                 |
| sna-Latn    | Shona                   |
| som-Latn    | Somali                  |
| spa-Latn    | Spanish                 |
| swa-Latn    | Swahili                 |
| swe-Latn    | Swedish                 |
| tam-Taml    | Tamil                   |
| tel-Telu    | Telugu                  |
| tgk-Cyrl    | Tajik                   |
| tgl-Latn    | Tagalog                 |
| tha-Thai    | Thai                    |
| tir-Ethi    | Tigrinya                |
| tpi-Latn    | Tok Pisin               |
| tuk-Cyrl    | Turkmen (Cyrillic)      |
| tuk-Latn    | Turkmen (Latin)         |
| tur-Latn    | Turkish (Latin)         |
| ukr-Cyrl    | Ukranian                |
| uig-Arab    | Uyghur (Perso-Arabic)   |
| uzb-Cyrl    | Uzbek (Cyrillic)        |
| uzb-Latn    | Uzbek (Latin)           |
| vie-Latn    | Vietnamese              |
| xho-Latn    | Xhosa                   |
| yor-Latn    | Yoruba                  |
| zul-Latn    | Zulu                    |

## Model
We intend to train new models and continuously update them.  The update might include both model binary files and phone inventory.

We note that updating to a new model will not overwrite the original models. All the models will be stored at `data/models` directory.
You can specify any models to run your recognizer.  

```bash
python update.py <model>
``` 
Current available models are the following

| Model | Description |
| --- | --- |
| `latest` | This is the latest version |


## Reference
Please cite following paper if you use this code in your work

* Li, Xinjian, et al. "Universal phone recognition with a multilingual allophone system." ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2020.

## Acknowledgements
This work uses part of following codes
* phoible: https://github.com/phoible/dev
* python_speech_features: https://github.com/jameslyons/python_speech_features
* fairseq: https://github.com/pytorch/fairseq