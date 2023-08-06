# allosaurus_private
Allosaurus is a pretrained universal phone recognizer. 

It can use to recognize narrow phones in more than 2000 languages.

![Architecture](arch.png?raw=true "Architecture")

## Install
Allosaurus is available from pip
```bash
pip install allosaurus
```
 
You can also install it by cloning this repository 
```bash
# clone this repository
git clone git@github.com:xinjli/allosaurus.git

# develop install might be easier to update
python setup.py develop
```

## Tutorial
The basic usage is as follows:
 
```bash
# recognize phones in <audio> 
python -m allosaurus.run [--lang <language name> --model <model name> --device_id <gpu_id>] -i <audio>
```

Only audio arg is mandatory, other options can ignored. Please refer to following sections for their details. 

### Audio
Audio should be a single input audio file

* It should be a wav file. If the audio is not in the wav format, please convert your audio to a wav format using sox or ffmpeg in advance.

* The sampling rate can be arbitrary, we will automatically resample them based on models' requirements.

* We assume the audio is a mono-channel audio.

### Language
The `lang` option is the language id. It is to specify the phone inventory you want to use.
The default option is `ipa` which tells the recognizer to use the the entire inventory. 

Generally, specifying the language inventory can improve recognition accuracy.

You can check the full language list with the following command. The number of available languages is around 2000. 
```bash
python -m allosaurus.list_lang
```

### Model
The `model` option is to select model for inference.
The default option is `latest`, it is pointing to the latest model you have downloaded.  

We intend to train new models and continuously release them. The update might include both acoustic model binary files and phone inventory. 

Typically, the model's name indicates its training date, so usually a higher model id should be expected to perform better.

To download a new model, you can run following command.

```bash
python -m allosaurus.download <model>
``` 

Current available models are the followings

| Model | Description |
| --- | --- |
| `200529` | This is the latest version |

If you do not know the model name, 
you can just use `latest` as model's name and it will automatically download the latest model.


We note that updating to a new model will not delete the original models. All the models will be stored under `pretrained` directory where you installed allosaurus.
You might want to fix your model to get consistent results during one experiment.  

To see which models are available in your local environment, you can check with the following command
```bash
python -m allosaurus.list_model
```

### Device
`device_id` controls which device to run the inference.

By default, device_id will be -1, which indicates the model will only use CPUs.  

However, if you have GPU, You can use them for inference by specifying device_id to a single GPU id. (multiple GPU is not supported)

## Reference
Please cite following paper if you use this code in your work

If you have any advice or suggestions, please feel free to send email to me (xinjianl [at] cs.cmu.edu) or submit an issue in this repo. Thanks!    

```
Li, Xinjian, et al. "Universal phone recognition with a multilingual allophone system." ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2020.
```

## Acknowledgements
This work uses part of the following codes
* phoible: https://github.com/phoible/dev
* python_speech_features: https://github.com/jameslyons/python_speech_features
* fairseq: https://github.com/pytorch/fairseq