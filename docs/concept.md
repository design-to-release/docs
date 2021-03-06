# 基础概念

## 设计系统

互联网产品与研发团队里有一些常见的迷思：产品和设计师需要懂技术吗？开发人员需要懂设计吗？如何保证用户体验的流畅性和一致性？如果老板的意见与设计师的想法相左，设计师该坚持己见吗？如何帮助公司扩大规模？

这些问题曾经困扰我们，时至今日仍未完全解决。不过针对这些问题，先进的互联网团队已经形成一套新的方法论，并通过它大大地改进了互联网领域的设计实践。这套方法论就是 **设计系统** ，或译为 **设计体系**。

<font color=3EAF7C >[**设计系统** ( Design System )](./concept.html#设计系统) 出现目的是为了实现数字产品，包含 [**设计语言**](./concept.html#设计语言) 以及相应 [**实践**](./concept.html#实践) 。[**设计语言**](./concept.html#设计语言) 是相互关联的 [**模式**](./concept.html#模式) 组合。</font>

一个成功的设计系统能够解答设计语言是什么样以及如何实施，是团队知识管理的一部分，为公司的各种产品提供了基石和指导。使用设计系统的优势有：

* 在设计和构建模块时能节省时间
* 在做整站修改时能节省时间
* 能让产品更快上线
* 其他好处：品牌统一、视觉一致性、团队协作


> 本篇涉及的名词对齐 Alla Kholmatova 著作的 [Design Systems](https://www.smashingmagazine.com/printed-books/design-systems/)，并对各种概念进行精简描述。

### 模式

<font color=3EAF7C >**模式 ( Pattern )** 指的是界面中可复现可复用的元素，包括具体的 **功能性模式** 、**感知性模式** 。</font>

* **功能性模式**：是界面的有形元素，让用户能够完成某种行为，或激励用户完成某种行为（如按钮、文本框）。
* **感知性模式**：更具描述性、无形的设计元素（如颜色、布局、风格、格调）

> 在业界的设计系统中，各模式存在不同的译名或名词指代，功能性模式常见称设计模式或控件、符号；感知性模式又被称为设计元素、原子、样式。

<br>
值得注意的是，在创建模式时更多的是关注模式的作用而非它是什么，通常会对模式进行结构分析其如何能够满足功能。例如，下图是四个不同版本的社交消息流模块，分布在不同的页面：
<br><br>
<img src="~@assets/concept/pattern-case.gif" width=500 height=144 style="border: 1px solid #DDDDDD" >
<br><br><br>
虽然这四个模块乍看之下很相似，但它们没有统一样式。但是对四个模块进行拆解，绘制其结构，可以看出它们是否可以统一为一种兼容所有用例的模式：
<br><br>
<img src="~@assets/concept/pattern-struct.gif" width=500 height=213 style="border: 1px solid #DDDDDD" >
<br><br><br>

### 设计语言

<font color=3EAF7C >**设计语言 ( Design Language )** 宏观上是塑造产品独特且统一风格的一套法则，微观上是一组组 **功能性模式** 和 **感知性模式** 的组合。</font>

它将 **模式** 明确地阐述出来，让所有参与产品创建的人持续可靠地遵循创意方向。

### 实践

设计系统的 **实践** 指如何创建、捕获、共享和使用设计语言，使设计系统运转。**模式库** 是一种比较普遍的实践方式。

<font color=3EAF7C >**模式库 (Pattern Library)** 的功能是将设计语言物化为具体的模式集合并阐述，包含收集、存储和共享模式的工具、原则和操作指南。</font>

上述的内容是对设计系统的抽象描述，你也可以参考以下业界的具体实践，获得更直观的认识。

* **平台级设计系统：** Apple、Google、Microsoft 三家公司各自都有流行的操作系统（iOS、macOS、Android、Windows）。为了指导各自生态下的应用软件设计，它们都推出了完整的设计系统。
    * Apple - [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
    * Google - [Material Design](https://material.io/design)
    * Microsoft - [Fluent Design System](https://www.microsoft.com/design/fluent/)

* **公司级设计系统：** 有的公司为自身产品或同类产品打造了设计系统，并将它们发布到网上。以上是有名的几个案例。
    * Atlassian - [Atlassian Design](https://atlassian.design/)
    * IBM - [Carbon](https://www.carbondesignsystem.com/)
    * AFX - [Ant Design](https://ant.design/)

### D2R 的设计系统

为了配套模式库的使用，通常实践中会形成 **模式文档** 和 **配套工具**，工具的作用主要是：保持模式库的更新；保持主设计文件的更新；将模式库作为求真来源。

**D2R** 解决方案中，提供了 **模式库**、**模式文档** 的 **配套工具** 和更多平台服务，来帮助团队快速搭建和使用设计系统。比如提供了模式文档供不同角色查阅，提供了工具在设计和研发环节使用这些模式库。

## 原子设计

构建设计系统时，需要模块化的分层方法，并且需要能与模式库相结合。这时，我们可以参考 **原子设计** 原则，它是由 Brad Frost 提出的能与设计系统概念相吻合，又能满足模式库的原则。

<font color=3EAF7C >**原子设计 ( Atomic Design )** 是一种设计方法论，由五个不同阶段组合而成，它们协同工作，以创建一个有层次、有计划的界面系统。 </font>

原子设计更多关注了 [**功能性模式**](./concept.html#模式) 的划分，最终体现在模式库的分层上。

<img src="~@assets/concept/atoms-to-pages.gif" width=631 height=320/>

> **原子设计** 最初由 Brad Frost 在 [Atomic Design](https://atomicdesign.bradfrost.com/) 中提出。

* <font color=3EAF7C >**原子** 事物的基础组成部分。模式的最小构成单元，不可再分。</font>如标签、输入框。
    * 一般对应模式库中的基础组件
    * 一部分感知性模式（如色调、字体、品牌风格）在业界实践中也会被放进原子层级。
* <font color=3EAF7C >**分子** 原子聚合成的粒子，设计中即UI元素组成的相对简单的组织。</font>如日期选择器。
    * 一般对应模式库中的复合组件，包含了抽象的业务逻辑，但不涉及具体的感知性模式。
* <font color=3EAF7C >**有机体** 由原子、分子构成的相对复杂的UI构成物。</font>
    * 在模式库的定义中，有机体同样接近复合组件，区别在于其体现了设计系统中的感知性模式（如带有业务特征的设计风格）或业务内容。
* <font color=3EAF7C >**模板** 可重用的线框图，用于展示原子、分子、有机体如何结合。</font>
* <font color=3EAF7C >**页面** 一个一个具有真实业务功能和真实数据的组件集合，也是真实的模板。</font>

### D2R 的模式库

D2R 支持的模式库，包含了样式、基础组件、复合组件、区块、模板、页面等模式，涵盖了原子设计的不同阶段。模式库的构成示例如：

<table>
	<tr>
        <th>模式功能</th>
	    <th>原子设计阶段</th>
	    <th>模式库类别</th>
        <th>名称</th>
	    <th>示例</th>  
	</tr >
	<tr >
	    <td rowspan="5">感知性模式</td>
	    <td rowspan="8">原子</td>
         <td rowspan="5">样式</td>
	    <td>颜色</td>
        <td></td>
	</tr>
	<tr >
	    <td>字形</td>
        <td></td>
	</tr>
	<tr >
	    <td>边框</td>
        <td></td>
	</tr>
	<tr >
	    <td>边角</td>
        <td></td>
	</tr>
	<tr >
	    <td>阴影</td>
        <td></td>
	</tr>
	<tr >
	    <td rowspan="10">功能性模式</td>
        <td rowspan="3">基础组件</td>
	    <td>标签</td>
        <td></td>
	</tr>
	<tr >
	    <td>按钮</td>
        <td></td>
	</tr>
    <tr >
	    <td>输入框</td>
        <td></td>
	</tr>
	<tr >
        <td rowspan="2">分子</td>
        <td rowspan="2">复合组件</td>
	    <td>日期选择器</td>
        <td></td>
	</tr>
	<tr >
	    <td>导航</td>
        <td></td>
	</tr>
    <tr >
        <td rowspan="3">有机体</td>
        <td rowspan="3">区块</td>
	    <td>新闻卡片</td>
        <td></td>
	</tr>
    <tr >
	    <td>列表区</td>
        <td></td>
	</tr>
    <tr >
	    <td>登录控件</td>
        <td></td>
	</tr>
	<tr >
	    <td>模板</td>
        <td>模板</td>
	    <td>…</td>
        <td>新闻详情模板</td>
	</tr>
	<tr >
	    <td>页面</td>
        <td>页面</td>
	    <td>…</td>
        <td>登录页</td>
	</tr>
</table>

D2R 的模式库中所有的的功能性模式都同时拥有 **设计控件** 和 **代码组件** 两种实现，并且双方的修改是通过相应解决方案同步关联的。

* **设计控件** 在设计软件/工具中作为控件使用，构成更复杂的界面。Sketch对应概念名为Symbol（直译符号），中文版译为控件，考虑到和代码组件区分度此处沿用控件的名称。
* **代码组件** 代码工程中的组件，通常会基于不同技术栈和平台有相应实现。
