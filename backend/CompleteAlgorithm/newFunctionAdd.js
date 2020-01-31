//JavaScript-C24.2.0 (SpiderMonkey)

//link of compiler where i run this code
//https://rextester.com/l/js_online_compiler

function Graph(){
        this.adjList = {}
        this.pathWeight = {}
        this.allpath = []
        this.minValue = Infinity
        this.minValuePath = ''
        this.optimalValue = Infinity
        this.optimalPath = ''
    }

    Graph.prototype.addVertex = function(vertex){
        this.adjList[vertex] = []
    }
    
    Graph.prototype.edgeWeight = function(v1,v2,w){
        w = (w/100);
        this.adjList[v1][v2]['w'] = w
        //print(this.adjList[v1][v2]['w'])
    }
    
    Graph.prototype.optimalEdgeWeight = function(v1, v2, w, t){
        var s = 100 - t;
        var tw = w/s;
        this.adjList[v1][v2]['ow'] = tw
        //print(this.adjList[v1][v2]['ow'])
    }
    
    Graph.prototype.addEdge = function(vertex1, vertex2, w, t){
        this.adjList[vertex1].push(vertex2)
        this.adjList[vertex1][vertex2] = []
        this.edgeWeight(vertex1, vertex2, w);
        this.optimalEdgeWeight(vertex1, vertex2, w, t);
    }
    
    Graph.prototype.appendAllPath = function(path){
        this.allpath = this.allpath + path + " ";
    }
    
    Graph.prototype.findshortpath = function(){
        var listSplitOfPath = this.allpath.split(" ")
        //print(listSplitOfPath.length)
        for(j=0;j<listSplitOfPath.length;j++){
            var executePath = listSplitOfPath[j]
            if(!executePath==''){
                /*print("sorry")
                }else{
                print(executePath + "ep")
                }*/
                var node = executePath.split(",")
                /*for(k=0;k<node.length;k++){
                    print(node[k])
                }*/
                this.calculateShortPath(0,node,0);
                this.calculateOptimalPath(0,node,0);
            }
        }
        print("Shortest Path => " + this.minValuePath + " " + this.minValue)
        print("Optimal Path => " + this.optimalPath + " " + this.optimalValue)
        
    }
    
    Graph.prototype.getPath = function(p){
        var rp = [p.length-1];
        //print(p)
        //print(p.length);
        for(let i=0; i<p.length-1; i++){
            rp[i]=[2];
            rp[i][0] = p[i].replace("p","");
            rp[i][1] = p[i+1].replace("p","");
        }
        //print(rp)
        //print(rp[0])
        return rp;
    }
    
    Graph.prototype.calculateShortPath = function(index, node, weightpath){
        
            weightpath = weightpath + this.adjList[node[index]][node[index+1]]['w']
            //print(weightpath)
            if(node[index+1]==node[node.length-1]){
              //print(weightpath)
              if(this.minValue>weightpath){
                  this.minValue=weightpath
                  this.minValuePath=node
              }
              return
            }
            index = index + 1;
            this.calculateShortPath(index, node, weightpath);
    }
    
    Graph.prototype.calculateOptimalPath = function(index, node, weightpath){
        
            weightpath = weightpath + this.adjList[node[index]][node[index+1]]['ow']
            //print(weightpath)
            if(node[index+1]==node[node.length-1]){
              //print(weightpath)
              if(this.optimalValue>weightpath){
                  this.optimalValue=weightpath
                  this.optimalPath=node
              }
              return
            }
            index = index + 1;
            this.calculateOptimalPath(index, node, weightpath);
    }
    
    Graph.prototype.dfs = function(s,d){
        const visited = {}
        const path = []
        path.push(s)
        this._dfsUtil(s, d, visited, path)
        this.findshortpath()
    }
    Graph.prototype._dfsUtil = function(v, t, visited, lp){
        visited[v]=true;
        if(v==t){
            this.appendAllPath(lp);
            visited[v]=false
            return
        }
        const neighbors = this.adjList[v]
        for(let i=0; i<neighbors.length; i++){
            const neighbor = neighbors[i]
            if(!visited[neighbor]){
                lp.push(neighbor);
                this._dfsUtil(neighbor, t, visited, lp);
                lp.pop(neighbor);
            }
        }
        visited[v]=false
    }

    const graph = new Graph()

    graph.addVertex('p1')
    graph.addVertex('p2')
    graph.addVertex('p3')
    graph.addVertex('p4')
    graph.addVertex('p5')
    graph.addVertex('p6')
    graph.addVertex('p15')
    graph.addVertex('p11')
    graph.addVertex('p12')
    graph.addVertex('p13')
    graph.addVertex('p14')
    graph.addVertex('p25')
    graph.addVertex('p21')
    graph.addVertex('p22')
    graph.addVertex('p23')
    graph.addVertex('p24')
    graph.addVertex('p35')
    graph.addVertex('p31')
    graph.addVertex('p32')
    graph.addVertex('p33')
    graph.addVertex('p34')
    graph.addVertex('p45')
    graph.addVertex('p41')
    graph.addVertex('p42')
    graph.addVertex('p43')
    graph.addVertex('p44')
    graph.addVertex('p51')
    graph.addVertex('p52')
    graph.addVertex('p53')
    graph.addVertex('p54')
    graph.addVertex('p55')
    graph.addVertex('p61')
    graph.addVertex('p62')
    graph.addVertex('p63')
    graph.addVertex('p64')
    graph.addVertex('p65')

    graph.addEdge('p1', 'p11', 32, 87)
    graph.addEdge('p1', 'p2', 77, 45)
    graph.addEdge('p2', 'p3', 20, 20)
    graph.addEdge('p2', 'p21', 20, 20)
    graph.addEdge('p3', 'p4', 23, 23)
    graph.addEdge('p3', 'p31', 21, 21)
    graph.addEdge('p4', 'p5', 20, 20)
    graph.addEdge('p4', 'p41', 25, 25)
    graph.addEdge('p5', 'p51', 23, 23)
    graph.addEdge('p5', 'p6', 54,98)
    graph.addEdge('p6', 'p61', 23,65)
    graph.addEdge('p11', 'p12', 20, 20)
    graph.addEdge('p11', 'p21', 20, 20)
    graph.addEdge('p21', 'p22', 23, 23)
    graph.addEdge('p21', 'p31', 21, 21)
    graph.addEdge('p31', 'p32', 20, 20)
    graph.addEdge('p31', 'p41', 25, 25)
    graph.addEdge('p41', 'p51', 23, 23)
    graph.addEdge('p41', 'p42', 20, 20)
    graph.addEdge('p51', 'p52', 20, 20)
    graph.addEdge('p51', 'p61', 23, 23)
    graph.addEdge('p61', 'p62', 21, 21)
    graph.addEdge('p12', 'p13', 20, 20)
    graph.addEdge('p12', 'p22', 20, 20)
    graph.addEdge('p22', 'p23', 23, 23)
    graph.addEdge('p22', 'p32', 21, 21)
    graph.addEdge('p32', 'p33', 20, 20)
    graph.addEdge('p32', 'p42', 25, 25)
    graph.addEdge('p42', 'p43', 23, 23)
    graph.addEdge('p42', 'p52', 20, 20)
    graph.addEdge('p52', 'p53', 20, 20)
    graph.addEdge('p52', 'p62', 23, 23)
    graph.addEdge('p62', 'p63', 21, 21)
    graph.addEdge('p13', 'p14', 20, 20)
    graph.addEdge('p13', 'p23', 20, 20)
    graph.addEdge('p23', 'p24', 23, 23)
    graph.addEdge('p23', 'p33', 21, 21)
    graph.addEdge('p33', 'p34', 20, 20)
    graph.addEdge('p33', 'p43', 25, 25)
    graph.addEdge('p43', 'p44', 23, 23)
    graph.addEdge('p43', 'p53', 20, 20)
    graph.addEdge('p53', 'p54', 20, 20)
    graph.addEdge('p53', 'p63', 23, 23)
    graph.addEdge('p63', 'p64', 21, 21)
    graph.addEdge('p14', 'p15', 20, 20)
    graph.addEdge('p14', 'p24', 20, 20)
    graph.addEdge('p24', 'p25', 23, 23)
    graph.addEdge('p24', 'p34', 21, 21)
    graph.addEdge('p34', 'p35', 20, 20)
    graph.addEdge('p34', 'p44', 25, 25)
    graph.addEdge('p44', 'p45', 23, 23)
    graph.addEdge('p44', 'p54', 20, 20)
    graph.addEdge('p54', 'p55', 20, 20)
    graph.addEdge('p54', 'p64', 23, 23)
    graph.addEdge('p64', 'p65', 21, 21)
    graph.addEdge('p15', 'p25', 20, 20)
    graph.addEdge('p25', 'p35', 20, 20)
    graph.addEdge('p35', 'p45', 23, 23)
    graph.addEdge('p45', 'p55', 21, 21)
    graph.addEdge('p55', 'p65', 20, 20)
    
    graph.dfs('p1','p25')
    print(graph.getPath(graph.minValuePath))
    print(graph.getPath(graph.optimalPath))
    //graph.findoptimalpath()
