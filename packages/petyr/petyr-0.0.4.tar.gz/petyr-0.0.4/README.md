# petyr

Affine transformations and Homography for Python 3. Fast and chainable operations. Produced matrix can be used with ```cv2.warpAffine``` and ```cv2.warpPerspective```.
## Installation
```bash
pip3 install petyr
```
## Usage
```python
from petyr import Affine, Homography
```
```Affine``` and ```Homography``` derive from the ```Transform2D``` base class which implements all the basic operations.

## Applying Transformation
```python
p = np.array([[0,0],[1,0],[1,1],[0,1]])

rotate_and_move = Affine().rotate(90).translate(2,1)
q = rotate_and_move * p

pt = Homography().from_elements([1,0,0,0,1,0,0.1,0.2,1])
r = pt * p
```
## Finding Transformation
```python
at = Affine.from_points(p, q)
pt = Homography.from_points(p, q)
```


## Basic Operations
These operations modify the ```Affine```, ```Homography``` or ```Transform2D``` object in-place except for ```invert()``` which return a new object.
- Translation
- Scaling
- Shearing
- Rotation
- Inversion
- Reset

```python
at = Affine()
at.translate(1, 3)
at.scale(1.05, 2)
at.rotate(45, degrees=True)
at.shear(10, 45)
at_inv = at.invert()
```
Same goes for ```Homography``` and ```Transform2D``` objects.
## Chaining
### Chaining Operations
Mutiple operations can be chained together.
```python
at = Affine()
at.scale(2,2).rotate(90)
at.shear(10, 0).translate(-3, 4)
```

### Chaining Transforms
Multiple transforms can be multiplied together. This is a **non-commutative** operation. The rightmost transform will be applied first.
```python
a = Affine()
a.translate(2,3)
b = Homography()
b.scale(4,5)
c = a * b
```

## TODO
- Generate complete documentation.
- Move documentation to somwhere other than README.
