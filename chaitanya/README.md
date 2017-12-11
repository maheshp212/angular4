# angular4-chaitanya
Chaitanya USA

Index.html
<br />&nbsp;&nbsp; |-main.ts
<br />&nbsp;&nbsp;&nbsp;&nbsp;	|-app.module
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		|-app.component (links for product & fruit)
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		|-product.component
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		|-fruit.component



\# - local variable
<video #movieplayer ...>
<button (click)="movieplayer.play()">
</video>

\* - Expression
<p *myUnless="myExpression">...</p>

[] - attribute
<input [value]="firstName">

() - Event
<button (click)="readRainbow($event)">

[()] - two way databinding
<my-cmp [(title)]="name">
