function w(c,r,n,s){const o=c.clone(),l=1<<o.level,e=o.col+r,t=o.row+n;return s&&e<0?(o.col=e+l,o.world-=1):e>=l?(o.col=e-l,o.world+=1):o.col=e,o.row=t,o}export{w as g};
