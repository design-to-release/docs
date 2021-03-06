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

## 实践

从设计到发布的各阶段，D2R 均提供了方案以满足各种功能实现，如： 

**建立设计系统** ：由设计专家主导设计系统的建立，通常在平台管理工具进行维护，并及时同步内容到各团队的设计师、产品经理所使用的设计工具；设计控件变更时，代码组件也会智能变更并触发变更流水线，等待前端专家介入，完成校验、调整与最终发布。
<br>
<br>
<img src="~@assets/intro/ucd_create_design_system.gif"  height="302" />
<br>
<br>


**视觉设计**：视觉设计师通过工具获取团队设计系统的资源，并在按照组件化的方式进行设计。为此设计工具提供了关于布局、组件嵌套、组件元信息设置、样式选择等一系列功能来保证组件化设计的实现。在交付环节，除了设计稿的交付，设计师也可以选择可复用的部分提交为业务控件。
<br>
<br>
<img src="~@assets/intro/ucd_design_in_tool.gif"  height="302" />
<br>
<br>
**持续交付**

## 内置特性

* **模式适配** 支持自定义样式，如“日间”与”暗黑“模式，设计后和发布前可以预览不同模式效果。

* **设备适配** 支持多种适配（pt、px、dp，etc..）方式，稿件可以智能切换。

* **版本管理** 设计资产按版本进行管理，提供编译时和运行时多版本生效的机制。
