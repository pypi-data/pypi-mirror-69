from allosaurus.pm.feature import *

class MFCC:

    def __init__(self, config):

        self.model = config.model

        # feature model config
        self.config = config

        # sample rate
        self.sample_rate = config.sample_rate

        # samples in each window
        self.window_size =  int(config.window_size * config.sample_rate)

        # overlap between windows
        self.window_shift = int(config.window_shift * config.sample_rate)

        # last complete window starting sample (index of sample)
        self.prev_window_sample = 0

        # last complete mfcc window index (index of window)
        self.prev_window_index = 0

        # list of mfcc features
        self.mfcc_windows = []

        # float32 or float64
        self.dtype = config.dtype

    def __str__(self):
        return "MFCC ("+str(vars(self.config))+")"

    def __repr__(self):
        return self.__str__()


    def compute(self, audio):
        """
        return feature for audio

        :param audio:
        :return: mfcc feature
        """

        assert self.config.sample_rate == audio.sample_rate, " sample rate of audio is "+str(audio.sample_rate)+" , but model is "+str(self.config.sample_rate)

        # get feature and convert into correct type (usually float32)
        feat = mfcc(audio.samples, samplerate=self.config.sample_rate, numcep=self.config.cep_size, nfilt=self.config.bank_size,
                    lowfreq=self.config.low_freq, highfreq=self.config.high_freq, useEnergy=self.config.use_energy, dither=self.config.dither).astype(self.dtype)

        return feat