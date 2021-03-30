# 简介

## 什么是D2R？

D2R 是 Soulution for Design to Release 的简称，旨在提供从产品设计到发布各阶段的解决方案，帮助提升设计师、产品、研发等角色的工作效能。

<u>_本文档是一份技术文档，而非使用手册，主要介绍D2R概念、基础理论，基于主流设计工具、组件化方案的最佳实践。_</u>

## 基本假设

本文档假设你已经熟悉了一些关于设计与组件化的 [**基础概念**](/concept) ，如 
[<font color="3EAF7C">**设计系统**</font>](./concept.html#设计系统) 、
[<font color="3EAF7C">**原子设计**</font>](./concept.html#原子设计)、
[<font color="3EAF7C">**模式库**</font>](./concept.html#实践)
，以便于接下来内容的理解。

## 目标

* 支持中大型规模业务团队（>50）协作
* 提供工具和平台，帮助团队构建和使用设计系统
* 提供工作流程，涵盖设计的持续交付、代码的持续构建、产品的持续发布等过程
* 提供智能化解决方案，助力设计和模式库、工程代码同步

## 流程

### 建立设计系统



### 建立共享

* **建立标准化的规范**

<img src="~@assets/intro/create_design_system.gif" height="230" />

团队设计符合自身业务的标准化的规范，并通过 <font color="3D9DD6">**设计资产管理服务**</font> 来进行沉淀，即 <font color="3EAF7C">**设计系统**</font>。

> 原子设计理论


<br>

* **设计与工程同步**

<img src="~@assets/intro/product_realization.gif" height="230" />


产品和设计师可基于团队设计系统或社区设计系统，进行视觉设计。为此D2R提供了 <font color="3D9DD6">**设计工具**</font> 、 <font color="3D9DD6">**可视化平台**</font> 保障使用者便捷且规范地使用设计系统。
<br>
<br>
在设计交付和视觉编码环节，<font color="3D9DD6">**智能转换服务**</font> 。
<br>

## 流程



<br>

<img src="~@assets/intro/framework.gif" height="200" />

D2R系统底层是**设计语言**、**工作流程**、**技术标准**：
* **设计语言** 是设计遵循的规则
* **工作流程** 涉及设计稿交付到发布环节，描述不同角色如何在平台协同
* **技术标准** 主要包含了一些协议和规范，以便在不同的设计工具与技术栈都能够实现这套工作流

中层是设计资产管理服务 和 一系列**D2C**（设计资产与组件互转）、**C2R**（组件到发布）过程的解决方案和服务。

应用层是一系列工具与协同平台，实现资产生使用功能及软件的持续集成流程。

## 工作流程

<u>_（目前本节为文字介绍，后续更新为演示动画）_</u>

D2R工作流程涉及到多种角色，包含资产管理、持续集成、团队/业务/产品管理等方面。下面列举一些小流程来帮助理解，完整流程请参考阅读**工作流程**章节。

* 创建云端组件
  * 在设计工具中绘制图层，设置背景色、字体大小为**编码**
  * 选中这些图层转换为组件（又称控件），然后打开同步面板
  * 填写组件的基本信息（名称、权限），确认可配置属性及默认值
  * 确认并上传至云平台
  * 后续可以在设计工具或在线编辑平台中引用这个组件，构成页面及组件

* 创建页面
  * 在设计工具中引用合适的**区块**来确定整页结构，这里使用一个上左右的整页布局区块
  * 在顶部区块中，拖入顶部导航组件，并设置其属性
  * 在左侧区块中，拖入左侧目录组件，并设置其属性
  * 在右侧区块中，嵌套引用一个垂直排列区块
  * 在垂直排列区块中，依次加入面包屑、标题、正文、底部信息、分享引导、评论等**预置组件**，调整每个组件的属性
  * 选中整页，打开同步面板
  * 填写页面的基本信息（名称、业务），确认并上传至云平台
  * 在云平台预览页面，确认视图效果后，执行视觉交付，平台将页面转换为视觉代码工程
  * 前端工程师添加非视图代码，补充数据来源、数据和状态的映射等逻辑，完成后提交效果确认和测试
  * 页面发布上线

* 修改指定业务组件默认效果并在页面生效
  * 在设计工具或平台中打开该分享组件对应的**预置组件**，修改组件属性改变分享组件中的图标大小
  * 将修改保存至**预置组件**，该预置是针对业务生效的
  * 触发该业务下页面的更新，凡依赖该**预置组件**的页面，将重新构建
  * 预览页面效果，并完成页面发布上线

* 修改具体页面里某组件的样式（其他页面保持不变）并生效
  * 在平台中打开该页面的配置界面，选中需要修改的**预置组件**
  * 修改该**预置组件**的属性值，并另存为新的**预置组件**
  * 保存页面，然后继续完成后续流程至上线
  * （后续在该业务下，该组件存在新、旧两个预置组件，有不同样式，均可被复用）


## 内置特性

* **模式适配** 支持自定义样式，如“日间”与”暗黑“模式，设计后和发布前可以预览不同模式效果。

* **设备适配** 支持多种适配（pt、px、dp，etc..）方式，稿件可以智能切换。

* **版本管理** 设计资产按版本进行管理，提供编译时和运行时多版本生效的机制。

## 目标

在设计与代码智能转换或设计资产管理的方向，业界存在诸多的D2C、Less/No Code解决方案。而本方案侧重支持**持续集成**、**分布上线**的应用架构，因此与他们有不同的目标，包括不限于以下：

* **可复用** 任何设计资产（设计稿、组件、区块、页面）都有复用的机制，例如：
    * 在设计工具中引用云端组件进行新产品设计
    * 在设计工具中载入旧的产品页面，微调界面后发布为新的产品页面

* **可维护** 任何资产都是可修改的，并可触发与匹配的系统行为，例如：
    * 在设计工具中修改云端组件的样式并上传更新，必要时触发云端所有依赖这个组件的产品自动更新
    * 在设计工具中调出某个产品页面的视图进行修改并上传更新，触发持续集成流水线进行编译和发布，无需研发介入

* **持续交付** 设计工具交付到平台的资产不仅限于设计稿，也可以是各种粒度的设计资产（组件、区块、页面等），不同粒度的设计资产更新对应不同的持续交付行为，而不仅仅是单一的稿件转换HTML/Component HTML：
    * 内容网格类型产品的设计师，按照组件粒度提交和修改的模式进行交付
    * 信息流产品的设计师，按照区块粒度进行交付
    * 企业展示型页面的设计师，按照整页粒度进行交付

## 价值

* **统一设计语言** 通过系统化的设计语言提升团队的协同效率，提升设计效能，将设计师从重复的劳动中解放出来。
* **增强一致性** 利用设计语言传达信息，解决形式与功能的问题。维护品牌的视觉一致性，避免个体主观和临时性的样式决策，使产品在对外环境中保持统一的外观和调性。
* **促进前端微服务化** 从产品设计根源上注入组件化的思维，促进交互一致，减少冗余代码和不必要的耦合；通过合理的结构划分，实现独立开发、独立部署。