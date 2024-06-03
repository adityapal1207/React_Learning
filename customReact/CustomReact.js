function customeRender(reactElement,container){
   /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target)
   
    container.appendChild(domElement);
    */
   // doing the above task using the loop to avoid the 
   // setting attributes by writting multiple lines
  
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
   }


container.appendChild(domElement);

}
const reactElement = {
    type:'a',
    props:{
        href:'https:/linkedin.com',
        target:'_blank'
    },
    children :'Click me to visit LinkedIn'
};  // this is the actually same as(internal process) we return the function from main to index.html

const mainContainer=document.querySelector('#root');

customeRender(reactElement,mainContainer);