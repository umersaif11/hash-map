# hash-map

An Odin Project Learning about the Hash Map Data Structure

This project implements Hash-Map/Hash-Set using  
modern JavaScript (ES6 modules) and Node v22.  


## Features

The `HashMap` class includes the following  
functions:

- `hash(key)`  
  Takes a key and produces a hash code with it.  

- `set(key, value)`  
  Takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.  

- `resize()`  
  Grow your buckets to double their capacity when your hash map reaches the load factor.  

- `get(key)`  
  Takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.  

- `has(key)`  
   Takes a key as an argument and returns true or false based on whether or not the key is in the hash map..  

- `remove(key)`  
  Takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.  

- `length()`  
  Returns the number of stored keys in the hash map.  

- `clear()`  
  Removes all entries in the hash map.  

- `keys()`  
  Returns an array containing all the keys inside the hash map.  

- `values()`  
  Returns an array containing all the values..  

- `entries()`  
  Returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]].      