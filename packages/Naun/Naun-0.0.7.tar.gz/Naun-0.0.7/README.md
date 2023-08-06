# Nuan
 This is a standard package created in python for the use of facial-detection and facial-recognition. Moreover, you'll need the following mentioned liberaries in your system: cv2, dlib, face_recognition, time, os, sys, pkg_resources, numpy & PIL.

 The code works around importing a picture, and verifying it with a referense. Each function is used differently, thus read the dock-strings to understand each function.

 One can also use the "multiplerecognition" function alongside "fetchfile" function to iterate over an entire folder, to check whether your input in "multiplerecognition" is in the fetched directory. 

This code works on Windows and OS, important to note is that one have dependencies!

 ## Installation

 Run the following to install this package
 ``` python
pip install naun
 ```

 ## Usage

#Example code
 ```python
folder = '/Users/desktop/'#look inside this folder
unknown = 'unknown.jpeg'#get an unknown image from that folder
known = 'Andreas.jpeg'#get an known image from that folder

facedetection(unknown, known, folder, folder)
```



"""
#Example code
```python
folder = '/Users/andreasevensen/Desktop/Empleyes'
Unknown = 'something.jpeg'
corr = '/Users/andreasevensen/Desktop/Empleyes/Known' 
unused = fetchfile(corr)
something = os.path.join(folder, Unknown)
multiplerecognition(something)
```


## Devolopment
If you would like to contribute to the ongoing project, email the developer (Andreas Evensen) and run the following command to download Nuan as active source code.

```python
pip install -naun.[dev]
```

## Contribute
If you would like to help the development for this script, please look under the "Devolopment" section; If you would like to thank my work feel free to contribute on "https://www.paypal.me/aristotes".


## Thanks
I would like to thank everyone who has contributed on this project:
Andreas Evensen