# DUPLICATE-DETECTOR

## Functions:

```shell
$ python -m duplicate-detector [compare|sort]
```

### Compare :

```shell
$ python -m duplicate-detector compare INPUT_DIR TARGET
```

Scan both directories (`INPUT-DIR` and `TARGET`). Compares the files solely on **FILE NAME**. Every file found in both directories are moved from their originals paths in `INPUT-DIR` into `INPUT-DIR/DUPLICATES`.

**Files in the `TARGET` directory are never moved.**

### sort:

```shell
$ python -m duplicate-detector sort INPUT_DIR OUTPUT_DIR
```

Sort a directory `INPUT-DIR` of pictures and videos (`'JPG', 'JPEG', 'PNG', 'MP4', 'MOV'`) into an `OUTPUT-DIR`. Files in `OUTPUT-DIR` are sorted into folders by year and month, based on their metadata, as following : `OUTPUT-DIR/YEAR/MONTH/pictures`.

If multiple file have the same **file name**, the heaviest get sorted into `OUTPUT-DIR/YEAR/MONTH` and the others into `OUTPUT-DIR/DUPLICATES`.

If no metadata is found for a file, it is not moved.
If a file is not in the supported extensions, it is not moved.

## Installation:

**For ubuntu:**

Install python3.8 , and required librairies:

> Without virtual env:
>
> ```shell
> $ sudo python3.8 -m pip install -r requirements.txt
> ```

> With virtual env:
>
> ```shell
> $ virtualenv venv -p /usr/bin/python3.8
> $ source venv/bin/activate
> $ python -m pip install -r requirements.txt
> ```
