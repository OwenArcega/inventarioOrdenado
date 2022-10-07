class Inventario{
    constructor(){
        this.arreglo = [];
    }

    agregar(item){
        if(this.arreglo.length == 0){
            this.arreglo.push(item);
            return true;
        }
        let aux = this.arreglo[this.arreglo.length-1];
        for(let i = 0; i < this.arreglo.length; i++){
            if(item.codigo == this.arreglo[i].codigo){
                return false;
            }
            
            if(item.codigo < this.arreglo[0].codigo){
                this.arreglo.push(aux);
                for(let j = this.arreglo.length-1; j > 0; j--){
                    this.arreglo[j-1] = this.arreglo[j];
                }
                this.arreglo[0] = item;
                return true;
            }
            if(this.arreglo[i+1] == undefined){
                console.log("s")
                    this.arreglo.push(item);
                    return true;
            }

            if(item.codigo > this.arreglo[i].codigo && item.codigo < this.arreglo[i+1].codigo){
                console.log(this.arreglo[i+1].codigo);
                console.log(item.codigo)
                console.log(item.codigo < this.arreglo[i+1].codigo);
                for(let j = this.arreglo.length-1; j >= i+1; j--){
                    this.arreglo[j] = this.arreglo[j-1];
                }
                this.arreglo.push(aux);
                this.arreglo[i+1] = item;
                return true;
            }
         }
    
        }

    eliminar(codigo){
        let indice = this.busqueda_binaria(codigo);
        if(indice == -1){
            return null;
        }

        let aux = this.arreglo[indice];
        for(let j = indice + 1;j < this.arreglo.length;j++){
            this.arreglo[j-1] = this.arreglo[j];
        }
        this.arreglo[this.arreglo.length-1] = aux;
        return this.arreglo.pop();
    
    }

    listar(){
        let listado = "";

        for(let i = 0; i<this.arreglo.length; i++){
            listado += "<" + this.arreglo[i].codigo + "> Nombre: " + this.arreglo[i].nombre
            + " Costo: " + this.arreglo[i].costo + " Cantidad: " + this.arreglo[i].cantidad + "<br>";
        }
        return listado;
    }

    listarInverso(){
    
    let listadoInv = "";
    for(let i = this.arreglo.length-1; i>=0; i--){
        listadoInv += "<" + this.arreglo[i].codigo + "> Nombre: " + this.arreglo[i].nombre
            + " Costo: " + this.arreglo[i].costo + " Cantidad: " + this.arreglo[i].cantidad + "<br>";
    }
    return listadoInv;
    }

    buscar(codigo){
        return this.arreglo[this.busqueda_binaria(codigo)];
    }

    busqueda_binaria(codigo){
        let lim_izq = 0;
        let lim_der = this.arreglo.length-1;
        let index = Math.round(lim_izq+lim_der/2);
        while(true){
            if(this.arreglo[index].codigo == codigo){
                return index;
            } else if(this.arreglo[index].codigo < codigo){
                if(this.arreglo[lim_der].codigo == codigo){
                    return lim_der;
                }
                lim_der = index;
                index = Math.ceil((lim_izq + lim_der)/2);
            } else if(this.arreglo[index].codigo > codigo){
                if(this.arreglo[lim_izq].codigo == codigo){
                    return lim_izq;
                }
                lim_izq = index;
                index = Math.ceil((lim_izq + lim_der)/2);
            }
            if(index == lim_izq || index == lim_der){
                return -1;
            }
        }
    }
    }
