# Nuan
 This is a standard package created in python for the use of facial-detection and facial-recognition. Moreover, you'll need the following mentioned liberaries in your system: cv2, dlib, face_recognition, time, os, sys, pkg_resources, numpy & PIL.

 ## Installation

 Run the following to install this package
 ``` python
pip install nuan
 ```

 ## Usage

 This is an example of the code
 ```python
folder = '/Users/desktop/'#look inside this folder
unknown = 'unknown.jpeg'#get an unknown image from that folder
known = 'Andreas.jpeg'#get an known image from that folder

facedetection(unknown, known, folder, folder)
```

## Devolopment
If you would lkike to contribute to the ongoing project, email the developer (Andreas Evensen) and run the following command to download Nuan as active source code.

```python
pip install nuan[dev]
```
