# 2025 X-AGI & 第18届中国R会议官方网站

## 网站概述

这是2025 X-AGI & 第18届中国R会议的官方网站，提供会议信息、日程安排、短期课程、参会指南和报名服务。

## 页面结构

- **首页 (index.html)** - 会议概览和主要信息
- **会议简介 (about.html)** - 会议背景、主办单位、赞助伙伴
- **日程安排 (schedule.html)** - 会议日程和分会场安排
- **短期课程 (courses.html)** - 会前培训课程信息
- **参会指南 (guide.html)** - 场地、住宿、交通等实用信息
- **报名参会 (register.html)** - 在线报名表单

## 报名功能

### 报名页面特点

1. **集成百格活动报名系统** - 使用专业的活动管理平台
2. **响应式设计** - 支持各种设备访问
3. **统一导航** - 与网站其他页面保持一致的导航体验
4. **报名须知** - 提供清晰的报名信息和注意事项

### 技术实现

报名页面使用百格活动提供的嵌入报名表单：

```html
<iframe id="promote_ticket_iframe" 
        width="100%" 
        src="https://www.bagevent.com/widget/ticket/9079965?widget=2&iframe=1" 
        frameborder="0" 
        scrolling="no">
</iframe>
```

配合自动调整高度的JavaScript脚本，确保表单在不同设备上都能正常显示。

### 使用方法

1. 访问 `register.html` 页面
2. 查看报名须知信息
3. 在嵌入的表单中填写报名信息
4. 提交报名并完成支付
5. 等待确认邮件

schedule的修改方法：

如何修改默认状态
如果您想改变某个演讲者的默认状态，只需要：
改为默认展开：
将 aria-expanded="false" 改为 aria-expanded="true"
在 class="collapse" 中添加 show，变成 class="collapse show"
改为默认收起：
将 aria-expanded="true" 改为 aria-expanded="false"
从 class="collapse show" 中移除 show，变成 class="collapse"

调整头像位置：
```html
<img src="assets/speaker_photo/JunLiu.jpg" alt="刘军教授" 
     class="speaker-photo" 
     style="object-position: center 30%;"
     onerror="this.src='assets/images/default-speaker.jpg'">
```

好的，这个问题非常重要。为您提供一个清晰的、可复用的操作指南，让您将来可以轻松地自行添加任意多的场次和演讲者。

操作非常简单，本质上就是**复制和粘贴代码模板，然后修改其中的文本和 ID**。

---

### 指南核心：两个操作

1.  **如何添加一个全新的场次** (例如，您现在有“18号上午”和“18号下午”，想添加“19号上午”)
2.  **如何在一个已有场次中添加一位新的演讲者**

---

### 操作一：如何添加一个全新的场次

假设您要添加 **“10月19号上午”** 的日程。

#### 第1步：在顶部导航区添加时间按钮

找到 `<ul class="nav nav-pills schedule-tabs">...</ul>` 这段代码。在其中**添加一个新的 `<button>`**。

*   **关键点**: `data-target` 属性的值必须是一个**新的、唯一的ID**，我们这里用 `#session-19-am`。

```html
<!-- schedule.html -->
<ul class="nav nav-pills schedule-tabs mb-4">
    <li class="nav-item"><button class="nav-link active" data-target=".schedule-tabs">全部</button></li>
    <li class="nav-item"><button class="nav-link" data-target="#session-18-am">10月18日上午</button></li>
    <li class="nav-item"><button class="nav-link" data-target="#session-18-pm">10月18日下午</button></li>
    
    <!-- ▼▼▼ 新增的按钮 ▼▼▼ -->
    <li class="nav-item"><button class="nav-link" data-target="#session-19-am">10月19日上午</button></li>
    <!-- ▲▲▲ 新增结束 ▲▲▲ -->

    <li class="nav-item"><button class="nav-link" data-target="#session-19-pm">10月19日下午</button></li>
</ul>
```

#### 第2步：添加对应的日程卡片

在页面下方，找到最后一个 `</div>` (`info-card` 的结束标签) 之后，**粘贴下面的完整代码模板**。

*   **关键点**: 这个新卡片的 `id` (`session-19-am`) **必须**与您在第1步中 `data-target` 的值完全匹配（去掉 `#`）。这是实现跳转的关键。

```html
<!-- ▼▼▼ 粘贴这个新场次的完整模板 ▼▼▼ -->
<div class="info-card schedule-card" id="session-19-am">
    <!-- 1. 修改这里的标题 -->
    <div class="card-header">10月19号上午 | 分会场：AI for Science</div>
    
    <!-- 2. 修改/或删除主席信息 (如果某个场次没有主席, 直接删除下面这行) -->
    <div class="session-chair">主席: [填写主席姓名和单位]</div>
    
    <div class="card-body">
        <div class="session-list">
            
            <!-- 3. 在这里粘贴一个或多个演讲者的代码块 (见下一个操作指南) -->
            <!-- 例如: -->
            <!-- <div class="session-item"> ... </div> -->
            <!-- <div class="session-item"> ... </div> -->

        </div>
    </div>
</div>
<!-- ▲▲▲ 模板结束 ▲▲▲ -->
```
做完这两步，一个新的场次框架就建好了，并且跳转功能也能正常工作。

---

### 操作二：如何在一个已有场次中添加一位新的演讲者

假设您要在刚刚创建的 **“10月19号上午”** 场次中，添加第一位演讲者。

#### 唯一操作：粘贴演讲者代码模板

在对应场次的 `<div class="session-list">` 内部，**粘贴下面的完整代码模板**。

*   **关键点**:
    1.  `data-bs-target` 的值 (`#speaker3`) 和 `<div class="collapse">` 的 `id` (`speaker3`) 必须匹配。
    2.  这个 ID (`speaker3`) **在整个页面中必须是唯一的**。如果您已经有了 `speaker1`, `speaker2`，那么新的就应该是 `speaker3`，再下一个是 `speaker4`，以此类推。

```html
<!-- ▼▼▼ 粘贴这个新演讲者的完整模板 ▼▼▼ -->
<div class="session-item">
    <!-- 1. 修改时间和演讲标题 -->
    <div class="session-title">
        <span class="session-time">09:00 - 10:00</span>
        <span>[这里填写演讲的标题]</span>
    </div>
    
    <!-- 2. 修改演讲者信息，并确保 data-bs-target 的ID是唯一的 (例如 #speaker3) -->
    <div class="session-speaker" data-bs-toggle="collapse" data-bs-target="#speaker3" aria-expanded="false" aria-controls="speaker3">
        <span>[这里填写演讲者姓名] | [演讲者头衔或单位]</span>
        <i class="fas fa-chevron-down expand-icon"></i>
    </div>
    
    <!-- 3. 确保 collapse 区域的 ID 与上面的 data-bs-target 匹配 (例如 speaker3) -->
    <div class="collapse" id="speaker3">
        <div class="speaker-details">
            <div class="row">
                <div class="col-md-3 text-center">
                    <!-- 4. 修改演讲者照片路径 -->
                    <img src="assets/speaker_photo/[照片文件名.jpg]" alt="[演讲者姓名]" class="speaker-photo">
                </div>
                <div class="col-md-9">
                    <div class="speaker-info">
                        <h5>演讲内容摘要</h5>
                        <!-- 5. 修改摘要内容 -->
                        <div class="speaker-abstract">[这里填写演讲内容摘要]</div>
                        
                        <h5>演讲者简介</h5>
                        <!-- 6. 修改简介内容 -->
                        <div class="speaker-bio">[这里填写演讲者简介]</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ▲▲▲ 模板结束 ▲▲▲ -->
```

如果您想在同一个场次添加第二位演讲者，只需再次复制粘贴上面的模板，紧跟在第一个演讲者模板的后面，并记得将所有 `speaker3` 的地方都改成新的唯一ID，例如 `speaker4`。

### 总结

*   **添加场次** = `1个新按钮` + `1个新卡片`，确保 `data-target` 和 `id` 匹配。
*   **添加演讲者** = `1个 session-item 模板`，确保 `data-bs-target` 和 `id` 匹配且**全局唯一**。

遵循以上步骤，您就可以自由地扩展日程页面的内容，同时保证所有跳转和展开功能正常工作。


## 技术栈

- **前端框架**: Bootstrap 5.3.3
- **样式**: 自定义CSS
- **报名系统**: 百格活动 (BagEvent)
- **响应式设计**: 支持移动端和桌面端

## 文件结构

```
X-AGI_Website/
├── index.html          # 首页
├── about.html          # 会议简介
├── schedule.html       # 日程安排
├── courses.html        # 短期课程
├── guide.html          # 参会指南
├── register.html       # 报名参会
├── assets/
│   ├── css/
│   │   └── style.css  # 主样式文件
│   ├── js/
│   │   └── script.js  # 主脚本文件
│   └── images/        # 图片资源
└── README.md          # 说明文档
```

## 注意事项

1. 报名表单由百格活动提供，确保网络连接正常
2. 建议使用现代浏览器访问以获得最佳体验
3. 报名成功后请保存确认信息
4. 如有问题请联系会务组：xagi-2025@cosx.org

## 更新日志

- 2025-01-XX: 创建网站基础结构
- 2025-01-XX: 集成百格活动报名系统
- 2025-01-XX: 完善所有页面内容和导航
