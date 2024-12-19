```javascript
// Incorrect usage of $inc operator for updating a nested field
db.collection.updateOne( { "_id": 1 }, { $inc: { "nested.field": 1 } } );
```