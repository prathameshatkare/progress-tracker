🔑 Key Takeaway

Relational comparisons (>, <, >=, <=) convert null to 0.

Equality comparison (==) does not convert null to 0; it only equals undefined.

This is a common JavaScript "gotcha."

Type conversion for relational comparison (>=):

undefined is converted to NaN when used in <, >, >=, <=.

Compare:

NaN >= 2 → false, because any comparison with NaN (except NaN != NaN) is false.


(===) Strict equality — compares both value and type.



✅ Copied by Value

That means a completely new copy is made — changing one does not affect the other

*/


/*
Non -Primitive Datatype==>Array Objects 

✅ Reference (Address) is Copied

You don’t get a new object — both variables point to the same memory reference.
So, changing one affects the other.
*/

//Stack -->Primitive
//Heap -->non-primitive