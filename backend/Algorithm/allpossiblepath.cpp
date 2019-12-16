#include<iostream>  //header file
using namespace std;

void check(int,int,string,int,int);   //check function for existing route

void addroute(int n1,int m2,string s_r2,int t2);  //if route exist then add route with some conditions

int pal(int,int); //pal function for remove last path if same as first

int rm(int,int);  //rm function for remove same or dublicate path from all outcome routes

string all_r[20]; //all outcomes route

int minwt[100];  //weight count for all paths

string path[100];  //for getting all routes

string j_o_r[100];  //for sharing same route when we have more than one choice to go, then we share previous path

int o_r[100];  //for remove conflict example start-p2-p3-p2- there is conflict because there 2 to 3 and again 3 to 2

int checkvalid[100];  //for add every new path in new index

string r[6]={"start","p1","p2","p3","p4","end"};  //all route we have

int ex[5][6]={
{0,1,1,0,0,0},{0,0,0,1,0,0},{0,0,0,1,0,1},{0,0,1,0,1,1},{0,0,0,0,0,1}
};     //exist route display as 1 like (0,1) means we can go start to p1 r[0] to r[1]

int dist[5][6]={
{0,25,40,0,0,0},{0,0,0,20,0,0},{0,0,0,20,0,23},{0,0,20,0,25,21},{0,0,0,0,0,23}
};    // distance for all routes

int trafic[5][6]={
{0,25,40,0,0,0},{0,0,0,20,0,0},{0,0,0,20,0,23},{0,0,20,0,25,21},{0,0,0,0,0,23}
};    //trafic for all routes

int w[5][6],speed[5][6];

 

int main(){
	int i,j;
	for(i=0;i<5;i++){
		for(j=0;j<6;j++){
			speed[i][j]=100-trafic[i][j];       // formula for count speed for each route
			if(ex[i][j]==1){  //check route exist or not
				w[i][j]=((dist[i][j])/(speed[i][j]));  //formula to count weight for each route
			}
			else{
				w[i][j]=0;
			}
		}
	}
  
	for(int c=0;c<100;c++){
		checkvalid[c]=1;     //provide 1 to all because at start, all path is available.
	}
  
	check(0,0,"",0,5); 
  
	int size = *(&path + 1) - path;int q=0;  //length of array
  
	for(int l=0;l<size && path[l]!="\0";l++){
			int len=path[l].length();
			char x=path[l][len-1];   //getting last character for all paths
			if(x=='d'){      // check that if last character is d then it reachs the target so this is our possible route.
			    all_r[q]=path[l];  //that possible route stored in all_r array
			    q=q+1;
			}
	}
  
	for(int ch=0;ch<q-1;ch++){   //this is for reduce all dublicate paths present in all_r arrray
		int n=pal(ch,q);
		q=n;
		int n1=rm(ch,q);
		q=n1;
	}
  
	for(int l=0;all_r[l]!="\0";l++){
		cout<<all_r[l]<<endl;         //print all paths
	}
  
	return 0;
}

void check(int n,int s,string s_r,int t,int m=5){
	if(s<6){       //we have six route so we don't want 6 as start point and also we have 0-5 index only.
		for(int j=s;j<=m;j++){
			if(ex[n][j]){        //whichever route is exists that is call with addroute function
				addroute(n,j,s_r,t);
			}
		}
	}
}

void addroute(int n1,int m2,string s_r2,int t2){
	path[t2]=s_r2;
	if(m2!=(*(&r + 1) - r)-1){  //true untill it did't get 5 or target
		j_o_r[t2]=path[t2];
		if(o_r[t2]!=m2){
			o_r[t2]=n1;    //asign present position for reduce conflict in future like 2 to 3 and 3 to 2
			for(int cvt=t2+1;cvt<(*(&path + 1) - path);cvt++){
				if(checkvalid[cvt]){                                 //check that index is available or not for storing path
					check(n1,m2+1,j_o_r[t2],cvt);   //for there adjacent element or route
					break;
				}
			}
			path[t2]=path[t2]+r[n1]+" ";
			check(m2,0,path[t2],t2);    //move to new route or direction and check for route exist
		}
	}
	else{  //if it get m2=5 means it reach the target
		for(int cvt2=t2;cvt2<(*(&path + 1) - path);cvt2++){
			if(checkvalid[cvt2]){
				path[cvt2]=path[t2]+r[n1]+" "+r[m2];  //add current route to old route
				checkvalid[cvt2]=0;      //block index for upcoming route means this is not available any more
				break; 
			}
		}
	}
}
int pal(int i,int q){            // to reduce last index if it same as first
    if(all_r[i]==all_r[q-1]){
        all_r[q-1]="\0";
        q=q-1;
        pal(i,q);
    }else{
    	return q;
	}
}
int rm(int bs,int q){              // it remove all dublicate paths
	for(int j=bs+1;j<q-1;j++){
		if(all_r[bs]==all_r[j]){
			for(int v=j;v<q-2;v++){
				all_r[v]=all_r[v+1];
			}
			all_r[q-1]="\0";
			q=q-1;
			rm(bs,q);
		}
	}
	return q;
}
