# OSX开发入门和OC基础
## 新建app工程并编译运行
### 新建OSX应用程序
点击"Create a new Xcode project"创建一个新的项目：
![create a new Xcode project 1](~@assets/oc-basis/create-new-1.png)
选择macapp标签下的app，并点击next：
![create a new Xcode project 2](~@assets/oc-basis/create-new-2.png)
语言选择Object-C，User Interface 选择XIB，可按需选择是否包含UI Test和Unit Test：
![create a new Xcode project 3](~@assets/oc-basis/create-new-3.png)
此时Demo会生成，执行一次构建(快捷键CMD + B)，即可在Products文件夹(在Xcode工程中叫Group)下看到编译好的app，双击即可运行：
![create a new Xcode project preview](~@assets/oc-basis/create-new-preview.png)
### 工程结构
目前所有的代码都是默认创建的代码，源码的主要结构如下：  
![project structure](~@assets/oc-basis/create-new-structure.png)  
核心文件：
* main.m。程序入口文件。
* AppDelegate.h。NSApplication委托对象的头文件
* AppDelegate.m。NSApplication委托对象的实现
* MainMenu.xib。主视图文件
* Info.plist。运行时使用的配置文件
### 主要代码文件之间的关系
点击工程导航目录的根节点，可以在General配置中看到Deployment Info的Main Interface值为MainMenu，即上文提到的MainMenu.xib为我们的应用程序的主用户界面，app启动运行时，会先去加载该视图。
![build target](~@assets/oc-basis/build-target.png)  
MainMenu.xib绑定了一个AppDelegate自定义controller，xib视图初始化的时候会实例化一个AppDelegate Controller。
![xib objects](~@assets/oc-basis/xib-objects.png)  
在AppDelegate.m文件中，点击代码行号上的圆点，也可以看到AppDelegate接口的window属性也绑定了MainMenu.xib
![app-delegate](~@assets/oc-basis/app-delegate.png)  
## 新建并使用framework
### 新建自定义的framework
同新建APP类似，以OSX的framework为例，新建framework的时候，选择[Framework](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/OSX_Technology_Overview/SystemFrameworks/SystemFrameworks.html)分类即可：
![framework-1](~@assets/oc-basis/framework-1.png)   
我们新建一个简单的MyLog Cocoa类，会生成对应的.h和.m文件，声明并实现log接口：  
![framework-api](~@assets/oc-basis/framework-api.png) 
然后在新建Framework时自动生成的头文件中，导入我们刚刚创建的接口的头文件：  
![framework-import](~@assets/oc-basis/framework-import.png) 
在framework的target的Build Phases中，将我们的Mylog.h拖动到Headers中的Public列表下，将接口暴露给外部：  
![framework-build](~@assets/oc-basis/framework-build-phase.png) 
此时，编译项目（快捷键CMD + B），即可编译我们的framework。文件树的Producsts下就是编译产物。
### 使用自定义的framework
使用时，以在上面新建的Demo App使用framework为例，将编译好的framework拖到Demo App中。
在项目配置中，Build Phase选项的“Link Binary With Libraries”里加入目标framework。
![framework-use](~@assets/oc-basis/framework-use-1.png) 
在项目配置中，General选项下添加我们的framework并嵌入
![framework-use 2](~@assets/oc-basis/framework-use-2.png) 
### 新建sketch framework
使用sketch官方提供的插件管理器——[skpm](https://github.com/skpm/skpm)可以创建sketch插件。  
环境要求：  
* osx command line tool
* Node > V6.x
安装：

```shell
npm install -g skpm
```

创建sketch插件：
```shell
skpm create plugin-name
```

新创建的插件源码文件结构如下：
![sketch plugin source](~@assets/oc-basis/plugin-structure.png)   
manifest.json为整个插件的声明文件，内容如下：
![sketch plugin source](~@assets/oc-basis/manifest.png)   

commands代表插件可触发的命令，每个command的script即是这个命令触发时运行的代码入口文件。menu是新建的插件在sketch菜单栏中相关配置。[sketch开发文档](https://developer.sketch.com/plugins/create-a-plugin)介绍了demo插件的文件结构和说明，本文不再详细介绍。  
插件安装完毕后，插件会自动build一次，打开sketch即可运行新建的demo插件。下图中插件名“my-plugin”对应manifest中的menu.title，“my-command”对应manifest的command name：
![demo plugin](~@assets/oc-basis/demo-plugin.png)  
后续我们会推出在CocoaJS中引入framework开发插件的进阶教程。
## OC语法
### 使用Foudation框架内的数据类型
OC可以使用C语言自带的数据类型，并且在C的基础上通过框架（如Foudation）进行了拓展。通过“#import <Foudation/Foudation.h>”语句可以导入OC的基本功能层中定义的常用数据类型（如NSNumber、NSString等），
这些类型的根对象类是（NSObject），数据类型名都以NS开头。Foudation工具包来源于NextSTEP，NS前缀名出自这里。我们日常使用OC开发Sketch插件时，主要使用这些NSObject。
### 布尔类型
C语言的布尔类型bool具有true、false两个值，OC也提供了相似的布尔类型BOOL，具有YES和NO两个值。这两种类型可以在同一程序中共存，Cocoa代码主要使用BOOL。
BOOL本质上是8位有符号字符，通过#define命令定义YES是1，NO是0。如果把大于1字节的值传给BOOL变量，而该值低位字节恰好为0，则该BOOL值为NO。而对于bool类型，非0即为true。
### OC类
#### 声明和使用一个自定义类
@interface关键字可以声明类的类型信息：

```objectivec
@interface Person NSObject
{
    NSString *name;
}
- (NSString *) getName;
```

```objectivec
@implementation Person NSObject
- (NSString *) getName {
    return name;
};
```

上面代码第一行代表新类Person继承（用:表示）自NSObject，第三行代表Person类有一个name实例变量。第五行代表Person类有一个示例方法getame。
@implementtation部分代表Person类的实现部分，这里直接在getName方法中返回了实例变量name。  
类的方法声明中，以-开头，代表的是实例方法，以+开头代表的是静态方法。
如果需要使用一个新的Person对象，首先需要执行对象的分配（alloc）和初始化（init），alloc用于分配新的内存空间，init用于调用对象的初始化方法：

```objectivec
Person *person = [[Person alloc] init];
```

也可以使用其他自定义的初始化方法初始化对象，比如：

```objectivec
NSNumber *n = [[NSNumber alloc] initWithDouble:0.1];
```

也可以通过new关键字等价完成alloc和init操作（new 默认调用init方法）：
```objectivec
Person *person = [[Person new];
```

#### 方法调用和中缀符
中括号代表调用函数或方法，链式的方法调用可以通过嵌套中括号实现。冒号后可传递参数。OC使用中缀符的语法技术，方法的名称和参数是连载一起的：

```objectivec
[NSColor colorWithRed:0 green:0 blue:0 alpha:1];
```
相比于常见的方法调用方式，这种方式的可读性更强一些，参数代表的意义变成了函数名的一部分。
#### 存取方法和属性
OC也可以定义存取（accessor）。Cocoa的惯例是：setter方法是在属性的前面加set前缀命名，getter方法直接以返回的属性名称来命名。为Person类增加存取函数：

```objectivec
@interface Person NSObject
{
    NSString *name;
}
- (NSString *) name;
- (void) setName: (NSString *) newName;
```

```objectivec
@implementation Person NSObject
{
    NSString *name;
}
// 此时我们使用了self，作用与未使用一样，只是为了消除歧义。
- (NSString *) name {
    return self.name;
};
- (void) setName: (NSString *) {
    self.name = newName;
};
```

oc提供了@property简化代码：
```objectivec
@interface Person NSObject
@property (assign) NSString *name;
```

```objectivec
@implementation Person NSObject
@synthesize name;
```

@synthesize是编译器的功能，编译器遇到该指令，会自动添加实现存取函数的预编译代码。同时原来方括号内的实例变量的声明已可有可无。  
属性类型前的括号代表属性指示符，用于告知编译器属性的一些特性。常用的属性指示符：  
* assign。该指示符号对属性只是简单的赋值，不更改引用计数
* atomic、nonatomic：指定setter和getter是否是原子操作，即是否线程安全。
* copy：如果使用copy指示符，当调用setter方法对成员变量赋值时，会将被赋值的对象复制的一个副本，再将该副本给成员变量。
* readonly、readwrite：readonly指示系统只合成getter方法，不合成setter方法；readwrite是默认值，指示系统需要合成setter方法和getter方法。
* retain：当把某个对象赋值给该属性时，该属性原来所引用的对象的引用计数减1，被赋值对象的引用计数加1。在未启用ARC机制的的情况下，retain可以保证一个对象的引用计数大于1时，该对象不会被回收。启用ARC后基本用Strong代替retain
* strong、weak：strong指示符该属性对被赋值对象持有强引用，而weak指示符指定该属性对被赋值对象持有弱引用。ARC（自动引用计数）不会为弱引用增加计数，引用对象被回收时，弱引用会被自动置为nil。

### 内存管理
上面有关属性支持符的描述，已经涉及了编程语言都需要关注的问题——内存管理。Cocoa使用引用计数技术来计算对象生命周期是否结束，当某段代码需要访问内存中某个对象时，对该对象的保留计数器加1，结束访问时对该对象的保留计数器减1。
Cocoa提供了一些内存管理的机制，下面一一介绍
#### MRC
Cocoa中，使用alloc、new、copy消息创建对象时，对象的保留计数器值为1，通过retain、release、dealloc、retainCount消息可以操作保留计数器的值：
* retain。增加对象的保留计数器的值。
* release。减少对象的保留计数器的值。
* retainCont。获取当前对象的保留计数器的值。
* dealloc。当一个对象因为保留计数器归0要被销毁时，OC会自动向该对象发送一条dealloc消息，该指令不要直接调用，可以重写并释放自己的资源
以下代码可以测试这几个指令的效果：

```objectivec
@interface MRC: NSObject
@end

@implementation MRC
- (id) init {
    if (self = [super init]) {
        NSLog(@"init：%lu", [self retainCount]);
    }
    return (self);
}
- (void) dealloc {
    NSLog(@"dealloc called");
    [super dealloc];
}
@end

int main (int argc, const char *argv[]) {
    MRC m = [MRC new];
    NSLog(@"%d", [m retainCount]);
    [m retain]; // count 2
    NSLog(@"%d", [m retainCount]);
    [m release]; // count 1
    NSLog(@"%d", [m retainCount]);
    [m release]; // count 0, dealloc
}

```
对于MRC模式下，Cocoa有一些内存管理约定：
* 使用new、alloc、copy创建对象，对象保留计数器为1.不再使用时应该对其发送release或autorelease消息。
* 其他方法创建，如果是临时对象（并没有对该对象保留），则不需要管，如果保留了对象，则需要在dealloc中释放。
* 如果保留了某个对象，就需要释放或自动释放。需要保持retain的次数=release的次数。
#### autorelease pool
在MRC中，需要手动管理对象所有权的管理和释放，实际开发使用的时候会非常麻烦。《Objective-C基础教程》9.1.3有如下demo：

```objectivec
- (void) setEngine: (Engine *) e{
    engine = [e retain];
}

// engine1的引用计数变化
Engine *engine1 = [Engine new]; // 1
[car setEngine: engine1]; // 2
[engine1 release]; // 1
```
上述代码在主程序释放了engine1的时候，car并没有释放对engine1的引用，此时engine1发生内存泄露。赋值时需要先释放对旧对象的引用，书中提供了修复方式：

```objectivec
- (void) setEngine: (Engine *) e{
    [e retain];
    [engine release];
    engine = e;
}
```

Cocoa提供了自动释放池(autorelease pool)来方便开发者在MRC模式下进行内存管理，其会在销毁时对自动释放池内的对象调用release消息。
release是对当前对象的引用计数进行减1的操作，如果对象引用计算为0，则会释放对象的内存空间。
NSObject类提供了一个autorelase实例方法，MRC模式下可手动调用该方法，将其放入自动释放池中。iOS开发中不建议使用autorelease
通过以下两种方式可以创建自动释放池：
* @autoreleasepool关键字
* NSAutoreleasePool对象
#### ARC
ARC是编译器的一种特性，不是内存管理机制。他会在编译的时候，在代码中合适的位置插入retain和release。而不再需要手动retain、release、autorelease。
ARC使用strong替代retain，引入了weak弱引用。可以在Build Setting中搜gar，设置启用ARC：
![arc-only](~@assets/oc-basis/arc-only.png)  
ARC只对可保留的对象指针（ROPs）有效，ROPs主要有以下三种：
1. 代码块指针
2. OC对象指针
3. 通过__attribute__((NSObject))类型定义的指针

如CFStringRef不支持ARC，但是可以同时使用ARC和MRC。设置方法是，Build Phase中的Compile Sources中选择要使用ARC的.m文件，双击Compiler Flags选项，输入要设置的模式：
* ARC状态下使用MRC的文件使用-fno-objc-arc
* MRC状态下使用ARC的文件使用-fobjc-arc
![arc](~@assets/oc-basis/arc.png) 
使用ARC时需要注意两个规则：
* 属性名不能以new开头
* 属性不能只有一个readonly而没有管理特性，因为默认的特性是assign，而ARC要求声明属性的所有权

## 相关资料
1. [xcode 界面使用介绍](https://macdev.io/ebook/start.html)
2. [skpm](https://github.com/skpm/skpm)
3. [CocoaScript](https://developer.sketch.com/plugins/cocoascript)
4. [Sketch API Reference](https://developer.sketch.com/reference/api/)
5. [Objective-C基础教程](https://book.douban.com/subject/3864073/)
6. [Cocoa学习手册](https://book.douban.com/subject/30815894/)

