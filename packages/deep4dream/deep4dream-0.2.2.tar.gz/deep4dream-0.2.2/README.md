# Deep Dream generator in Keras by using Inceptionv3 model 

# Installation

```
pip install deep4dream
or in colab google cloud
!pip install deep4dream
```

## Usage 

```
from deep4dream import deep_dream
image_path='sky.jpg' #input image
new_dream='dream_sky' #result_prefix
iterations_no=200  #Number of ascent steps per scale
deep_dream.deep_dream_image(image_path,new_dream,iterations_no)
```

## Specific iterations_no Number of ascent steps per scale Selection
![](https://iraqprogrammer.files.wordpress.com/2020/05/dream4.jpg)
![](https://iraqprogrammer.files.wordpress.com/2020/05/dream3.jpg)
![](https://iraqprogrammer.files.wordpress.com/2020/05/sky.jpg)
![](https://iraqprogrammer.files.wordpress.com/2020/05/dream_sky.jpg)
![](https://iraqprogrammer.files.wordpress.com/2020/05/n.jpg)
![](https://iraqprogrammer.files.wordpress.com/2020/05/46017685-be49-45c4-92df-42c50b5e8d37.jpg)