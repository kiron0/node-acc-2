> # Welcome to Tour Api

`// Info for POST types`

```
{
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    duration: Number,
    view: Number,
    maxGroupSize: Number,
    status: String,
}
```

> ## Dummy Data for POST

```
{
  "name": "Hello World",
  "description": "This is a hello description",
  "imageUrl": "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png"
  "price": 25,
  "duration": 5,
  "view": 0,
  "maxGroupSize": 15,
  "status": "available",
}
```

> ## Get api end points

> Get all tours: GET & POST

```
https://tours-api.up.railway.app/api/v1/tours

```

> Get a single tour: GET

```
https://tours-api.up.railway.app/api/v1/tours/632ab8d7254328307473292d

```

> Get a single tour: PATCH

```
https://tours-api.up.railway.app/api/v1/tour/632ab8d7254328307473292d

```

> Get all tours with pagination: GET

```
https://tours-api.up.railway.app/api/v1/tours?page=2&limit=3

```

> Get all tours with greater than sort: GET

```
https://tours-api.up.railway.app/api/v1/tours?sort=price[gt:-200]

```

> Get all tours with less than sort & pagination: GET

```
https://tours-api.up.railway.app/api/v1/tours?page=1&sort=price[gt:-200]

```

> Get top 3 viewed tours: GET

```
https://tours-api.up.railway.app/api/v1/tour/trending

```

> Get top 3 cheapest tours: GET

```
https://tours-api.up.railway.app/api/v1/tour/cheapest

```

> Get all tours with all type of sort & pagination: GET

```
https://tours-api.up.railway.app/api/v1/tours?sort=price[gt:-200]&status=unavailable&page=1&limit=5

```
