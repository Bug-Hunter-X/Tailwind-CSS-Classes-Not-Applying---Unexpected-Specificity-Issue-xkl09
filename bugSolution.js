```javascript
// Solution: Using !important (Generally not recommended, but for illustration)
<div class="bg-gray-100 p-4">
  <p class="text-xl font-bold !important">This is some text.</p>
</div>

// Better Solution: Increase specificity
<div class="bg-gray-100 p-4">
  <div class="container">
    <p class="text-xl font-bold">This is some text.</p>
  </div>
</div>
```