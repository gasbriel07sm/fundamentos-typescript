const body1 = document.querySelector('body') as HTMLBodyElement;
if (body1) body1.style.backgroundColor = 'lightblue';

// Type assertion (as)
const body2 = document.querySelector('body')! as HTMLBodyElement;
body2.style.backgroundColor = 'lightblue';

// Non-null assertion (!)
const body3 = document.querySelector('body')!;
body3.style.backgroundColor = 'lightblue';
