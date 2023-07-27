#include <bits/stdc++.h>
using namespace std;
void printNaturalNumbers(int n) {
cout<<"The First n Natural Numbers are"<<endl;
   for (int i = 1; i <= n; i++) {
      cout << i<<endl;
   }
}
int main() {
   int n ;
  cin>>n;
  printNaturalNumbers(n);
   return 0;
}