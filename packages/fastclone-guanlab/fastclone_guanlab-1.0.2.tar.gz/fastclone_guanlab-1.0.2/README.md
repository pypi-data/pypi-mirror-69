# FastClone

FastClone is a fast algorithm to infer tumour heterogeneity. Given somatic
mutation frequencies and copy number data, FastClone infers subclonal
composition and phylogeny. The algorithm won the first place in DREAM Somatic
Mutation Calling -- Heterogeneity Challenge in 2016.

## Installation

FastClone needs Python 3.5 or later version. It needs logbook, python-fire,
scikit-learn, and pandas. To install the package using Pip,

```
pip install fastclone-guanlab
```

## Usage

FastClone accepts either MuTect VCF + Battenberg format (specified in the DREAM
SMC-Het Challenge) or PyClone format.

The general format of the command line:
```
fastclone load-[FILE_FORMAT] prop [FILE_NAME] [TUMOR_PURITY] solve [OUTPUT_PATHWAY]
```

An example to load samples and infer (t1.tsv is included in this repository):
```
fastclone load-pyclone prop t1.tsv 0.8 solve /home/fastclone_result1/
```

Run `fastclone` for more help information.

If MuTect VCF and PyClone samples are provided, note that MuTect
mutations are labelled as 'Chromosome:Coordinate:AltBase', such as
'Y:15989697:G'. Make sure PyClone ID uses the same ID.
