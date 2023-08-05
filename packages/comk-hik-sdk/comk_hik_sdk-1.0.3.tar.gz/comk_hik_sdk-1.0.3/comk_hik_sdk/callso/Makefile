#Makefile

card : call.cpp ../lib/libhcnetsdk.so public.h ./include/HCNetSDK.h
	cp -r ../lib/*.so /usr/lib
	cp -r ../lib/HCNetSDKCom   /usr/lib
	g++ -I./ -I./include/ -MM call.cpp > call.dpp.$$;\
	sed 's,\(./call\)\.o[ :]*,\1.o ./call.dpp : ,g' < ./call.dpp.$$ > ./call.dpp; \
	rm -f ./call.dpp.$$
	g++ -c -o call.o ./call.cpp  -I./ -I./include/ -pipe -g -Wall
	g++ -fPIC -shared call.cpp /usr/lib/libhcnetsdk.so  -L../lib/ -I../lib/ -I./ -I./include/ -Wl,-rpath=./:../lib/HCNetSDKCom:../lib:/usr/lib  -o call.so
	rm -f ./call.o
	rm -f ./call.dpp