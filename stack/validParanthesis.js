

function valid(str) {
if(str.length ==0) return false;

var stack = []

for(let i=0; i<str.length; i++){
    const char = str[i];
    if(char === "(" || char === "{" || char === "[") {
        stack.push(char)
    } else if(char === ")" || char === "}" || char === "]"){
        if(isEmpty(stack)){
            return false
        }
                   
        const top = stack.pop()

        if ((top === "(" && char !== ")") ||
        (top === "{" && char !== "}") ||
        (top === "[" && char !== "]")) {
        return false;
    }
    }
}
return isEmpty(stack)
}


function isEmpty(stack) {
    return stack.length === 0;
}

console.log(valid("(){}[]"));

