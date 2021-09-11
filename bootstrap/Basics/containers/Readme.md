# Bootstrap || Containers

## Containers

* Bootstrap requires a containing element to wrap site contents.

* Containers are used to pad the content inside of them, and there are two container classes:

 1. The ```.container``` class ==> it provides a responsive fixed width container.

 2. The ```.container-fluid``` class ==> it provides a full width container, spanning the entire width of the viewport.

## Fixed container

* use the ```.container``` class to create a responsive, fixed-width container.

* Note that its width(```max-width```) will change on different screen sizes:


|          | Extra small <576px    | Small >= 567px    | Medium >= 768px   | Large >= 992px    | Extra large >= 1200px|
|----------|:---------------------:|:-----------------:|:-----------------:|:-----------------:|---------------------:|
|max-width |     100%              |     540px         |     720px         |     960px         |     1140px           |

```Container
<div class="container>
    <h1>My First Bootstrap page</h1>
    <p>This is some text<p>
</div>
```

## Fluid container

* Use the ```.container-fluid``` class to create a full width container, that will always span the entire width of the screen (```width``` is always ```100%```)


```Container-fluid
<div class="container-fluid>
    <h1>My First Bootstrap page</h1>
    <p>This is some text<p>
</div>
```

## Container padding

* ```.pt-3`` means "add a top padding of 16px"

```container Padding
<div class="container pt-3></div>
```

## Container Border and Color

```Container border
<div class="container p-3 my-3 border"></div>

<div class="container p-3 my-3 bg-dark text-white"></div>

<div class="container p-3 my-3 bg-primary text-white"></div>
```

## responsive containers

* you can also use the ```.container-sm|md|lg|xl``` classes to create responsive containers.

* the ```max-width``` of the container will change on different screen sizes/viewports:

| Class          | Extra Small   | Small         | Medium        | Large         | Extra large      |
|---------------:|:-------------:|:-------------:|:-------------:|:-------------:|:----------------:|
| .container-sm  |    100%       |    540px      |   720px       |   960px       |    1140px        |
| .container-md  |    100%       |    100%       |   720px       |   960px       |    1140px        |
| .container-lg  |    100%       |    100%       |   100%        |   960px       |    1140px        |
| .container-xl  |    100%       |    100%       |   100%        |   100%        |    1140px        |
