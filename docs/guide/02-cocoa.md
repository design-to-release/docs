# Cocoa 框架概述
## 简介
Cocoa是 OS X 操作系统和 iOS 的应用程序环境。它包含三部分：
1. 运行时。它为OS X和iOS中运行的应用程序提供了唯一的运行时环境，为Cocoa应用程序提供了用户界面，并与操作系统的其他可见组件紧密集成。
2. 一套面向对象的软件组件（类）组成的套件。
3. 一个集成的开发环境——Xcode，可以支持两个平台应用程序的开发。  

在 OS X 和 iOS 上有很多Cocoa框架，其中每个平台核心的框架有两个：
1. 在OS X中：Foundation和AppKit。
2. 在iOS中：Foundation和UIKit。  

在 OS X 体系结构中的Cocoa如下图所示：
![cocoa-osx](~@assets/cocoa/cocoa-osx.jpg)  
在 iOS 体系结构中的Cocoa如下图所示：
![cocoa-ios](~@assets/cocoa/cocoa-ios.jpg)  
有关Cocoa和操作系统架构的关系，Foudation、AppKit、UIKit的类层次结构，[官方文档](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaFundamentals/WhatIsCocoa/WhatIsCocoa.html#//apple_ref/doc/uid/TP40002974-CH3-SW22)提供了更详细的说明，此处不再赘述。  
## Foundation
Foundationd定义了Cocoa应用程序中任何class的基础层。区分Foudation中的类和AppKit(或UIKit)类的标准是：该类是否用于支持用户界面。
Foudation框架的设计目标：
1. 定义对象的基本行为，为内存管理、对象可变性、通知等机制设置一致的约定。
2. 国际化和本地化支持。
3. 支持对象持久性。
4. 支持对象分发。
5. 提供某种程度的操作系统独立性来支持可移植性。
6. 为编程语言中的原始数据类型提供等效的对象封装（NS开头的class，继承自NSObject），提供用于访问基础系统实体和服务的类。在这里我们也推荐优先使用Cocoa封装的与原始数据类型等效的类，这些类提供了相对于原始数据类型更强大而易用的API，大多数的AppKit或UIKit的函数也会优先使用Foudation内封装的类作为参数或返回值。
## AppKit和UIKit
### AppKit
AppKit包含在 OS X 中实现事件驱动的图形用户界面所需的所有对象：通用用户界面类、文本、列表等。开发者可以通过以下几个层面级别使用AppKit：
1. 采用 Interface Builder，即Xcode内拖拽控件到xib等视图层文件的方式。这种方式可以用于创建用户界面对象到应用程序的控制器对象的绑定，控制器对象可以使用内置的，也可以使用自定义实现的。
2. 以编程方式控制用户界面。
3. 通过实现自己的对象继承NSView或其他类。  

AppKit的层次结构树中最大分支的根是 NSResponder 类。此类定义了响应链，是一个用于响应用户事件的对象的有序列表。  
其次是NSCell及其子类。他们大致镜像实现了NSControl的子类。NSControl和NSCell类以及它们的子类，定义了用户界面的一组通用对象，AppKit为NSControl和NSCell划分了各自的工作，大多数控制对象可以与一个或多个实现绘制和处理事件的详细信息的单元对象相关联。  
NSControl和NSCell实现了一种基于AppKit的重要事件机制（还有一种重要的事件机制就是委托，本文不展开介绍）：Target-action机制。单元可以保存标识用户触发事件时应发送到特定对象的消息的信息，控件从中提取所需的信息，并将操作消息发送到目标对象。通常可以使用Interface Builder通过将控件从控件对象拖动到应用程序或其他对象来设置这些目标和操作。也可以通过编程设置目标和操作。

#### UIKit
UIKit框架是AppKit框架的姐妹框架。其设计目的基本上是相同的，但由于移动设备相对于PC的特殊性，其实现的差异很大。最大的差异就是用户界面的外观，另外在事件等机制上也存在差异，比如Target-action机制中不需要cell。
## nib、view、controller
Cocoa框架中使用了大量的设计模式，比如[MVC模式](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaFundamentals/CocoaDesignPatterns/CocoaDesignPatterns.html#//apple_ref/doc/uid/TP40002974-CH6-SW1)，它在Cocoa图形界面开发中占有举足轻重的地位。
### Cocoa中的MVC
传统的MVC中，Modle通知View数据发生改变，View直接向Modle获取数据。  
Cocoa的MVC将modle和view解耦。在cocoa的设计理念里，modle和view各自都应该是可复用的模块，应该在设计上彼此分开。所以在Cocoa中，controller充当了两个方向上的view和modle的数据流媒介。其传统版本的MVC区别如图所示。  
传统版本：  
![mvc](~@assets/cocoa/mvc.gif)  
Cocoa:  
![cocoa-mvc](~@assets/cocoa/cocoa-mvc.gif)  
### 视图层文件——nib
Cocoa中使用Interface Builder（起初是独立的应用程序，后来整合到Xcode中）作为开发工具构建图形用户界面，图形界面文件叫做nib文件，拓展名是nib或xib，xib是基于xml的文件，可被编译成二进制nib文件。  
xib文件可以以简单的方式包含对象，这个对象可以是类实例，所以可以在nib文件加载时，创建类实例（一般是controller）并连接到视图上，连接的方式有两种：
1. 输出口。即Target-action机制。
2.操作。定义在nib中的绑定关系。
xib有以下几个重要属性：
1. xib文件名。
2. File's Owner。决定从哪里加载xib
3. 文件中视图的class。表示加载xib中的什么视图
4. outlet指向。图形界面中的绑定关系。
下图为一个xib文件的部分内容：
![xib](~@assets/cocoa/xib.png)  
在绘制界面元素时，xcode提供了很多控件可供拖拽进视图文件，快捷键cmd + shift + L可搜索所有可用的控件：
![xib](~@assets/cocoa/interface-builder.png)  
### Controller
在Cocoa中，控制器对象分为两种：中介控制器（mediating controller）和协调控制器（coordinating controller）。  
中介控制器通常继承自NSController（AppKit实现NSController类及其子类。这些类和绑定技术在iOS中不可用），并在“绑定技术中”使用，负责中介视图对象和模型对象之间的数据流。中介控制器通常是从Interface Builder库中拖动的现成对象，并在视图对象的属性和控制器对象的属性配置建立绑定。  
协调控制器通常是NSWindowController的子类或自定义NSObject，它们往往用于特定程序，所以不可重用。它们为应用程序实现集中的通信和控制逻辑，充当框架对象的委托和动作消息的目标，例如：
* 响应委托消息和观察通知。
* 响应动作消息。
* 管理拥有对象的生命周期。
* 在对象之间建立连接并执行其他设置任务
NSWindowController和NSDocumentController是基于文档的应用程序的Cocoa架构的一部分。这些类的实例为上面列出的几种功能提供了默认实现。协调控制器经常拥有归档在nib文件中的对象。作为文件的所有者，协调控制器在nib文件中的对象外部，并管理这些对象。例如上图的xib文件中NVMaskPanle就是一个协调控制器，它继承自NSObject。
### 视图和控制器的绑定
#### 视图和class的绑定
通过Interface Builder拖拽的视图控件会有默认的controller class绑定，如Push Button的是NSButton：
![xib](~@assets/cocoa/button.png)  
![xib](~@assets/cocoa/button-class.png)  
当我们需要绑定一个其它的controller时，可在Class选项后选择要绑定的controller类（也可手动输入）：
![xib](~@assets/cocoa/view-bind-class.png)  
#### 视图与属性的绑定
以上图的Panel Header View为例，如果其最终由父View的controller的一个属性控制，我们需要将Panel Header View与该属性绑定。步骤如下。  
右击要绑定的view，此时弹出的对话框中，“New Referencing Outlet”选项可以看到一个“+”，点击并拖动，可以拖拽出指向线选择要绑定的目标：
![xib](~@assets/cocoa/view-bind-property-1.png)  
拖拽到“File's Owner”并选择要绑定的属性（以图中的headerView为例）：
![xib](~@assets/cocoa/view-bind-property-2.png)  
此时绑定完成，可以在Connection Inspector内看到效果：
![xib](~@assets/cocoa/view-bind-property-3.png)  
#### 视图与外部controller绑定
有时视图可能需要与一个不在当前文件内的controller绑定，前文提到nib内是可以包含对象的，所以可以在Interface Builder内以Object作为媒介。  
首先拖拽一个Object：
![xib](~@assets/cocoa/view-bind-class-drag-object.png)  
设置该Object绑定的controller（像”视图和class的绑定“一节中一样设置）：  
![xib](~@assets/cocoa/outer-controller-1.png)  
类似”视图与属性的绑定“，从要绑定的视图的”New Referencing Outlet“绑定到新建的Object。效果如下：
![xib](~@assets/cocoa/outer-controller-2.png)  


## 参考资料
1. [What Is Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaFundamentals/WhatIsCocoa/WhatIsCocoa.html#//apple_ref/doc/uid/TP40002974-CH3-SW16)
2. [Cocoa Design Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaFundamentals/CocoaDesignPatterns/CocoaDesignPatterns.html#//apple_ref/doc/uid/TP40002974-CH6-SW6)
2. [使用xib开发界面](http://www.cocoachina.com/articles/11086)
2. [Cocoa Bindings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)

