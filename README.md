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
