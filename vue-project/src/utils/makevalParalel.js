import { startVector,endVector, selectedObj } from './sharedVariables';


const makevalParalel = () => {
    let newVecrors = []
    
    if(selectedObj.size > 0){
        console.log(selectedObj);
        
        if (startVector.value) {
            let subVector = 0
            for (let i = 0; i < startVector.value.length; i++) {
    
                 subVector = endVector.value[i].sub(startVector.value[i])
    
                newVecrors.push(subVector);
            }   
            
        }
        if (newVecrors.length > 1) {
            let arr = [...selectedObj]
            let fixedLength;
            let direction = null;
     
                for(let i = 1; i < arr.length; i++){

                    fixedLength = arr[i].userData.lineLength
    
                     direction = newVecrors[0].clone().normalize();
        
                    
                     direction.multiplyScalar(fixedLength).add(startVector.value[i])
                        if( arr[i].userData.pararelled === false ){
                            arr[i].geometry.setFromPoints([startVector.value[i], direction]);
                            arr[i].children[1].geometry.setFromPoints([direction])

                            arr[0].userData.pararelled = true;
                            arr[i].userData.pararelled = true;
                        }
                        else{
                            console.log("Lines are parallel");
                            break
                            
                        }
                     
                    
                // arr[i].geometry.setFromPoints([startVector.value[i], direction]);
                // arr[i].children[1].geometry.setFromPoints([direction])

                // arr[0].userData.pararelled = true;
                // arr[i].userData.pararelled = true;
                console.log(arr[i]);
                
                }       
        }
        selectedObj.clear()
    }
    else{
        console.log("Select lines");
    }
}


export default makevalParalel