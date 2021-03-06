/**
 * Created by Administrator on 2016/9/19.
 */
//引入信息
var news= "html5：Document root element.<br>文档根元素="+
"col：Columns in a table.<br>表格中的列="+
"table：Table of multi-dimensional data.<br>表格="+
"head：First element of the HTML document. Contains document metadata.<br>HTML文档中的第一个元素。包含文档元数据="+
"span：Container with no semantic meaning.<br>无语义的容器="+
"div：Container with no semantic meaning.<br>无语义的容器="+
"fieldset：Set of form controls grouped by theme.<br>按用途组合的一组表单控制元素="+
"form：Form.<br>表单="+
"body：Document content.<br>文档的主体="+
"h1：Heading for the current section.<br>当前章节的标题="+
"section：Contains elements grouped by theme, for example a chapter or tab box.<br>包含同主题一组元素的容器，例如文档的章节="+
"colgroup：Defines a group of columns in a table.<br>对表格中的若干列进行组合="+
"tr：A row of cells.<br>表格中的一行单元="+
"title：Document title.<br>文档标题="+
"a：Hyperlink.<br>超链接="+
"pre：Text that is preformatted in the HTML code.<br>在HTML代码中预先格式化的文本="+
"meter：Control for entering a numeric value in a known range.<br>控制在已知范围内输入度量值="+
"select：Control for selecting from multiple options.<br>有多选值的下拉列表="+
"aside：Content related to surrounding elements that doesn't belong inline, such as a advertising or quotes.<br>与周围元素相关的内容，但分开显示="+
"h2：Heading for the current section.<br>当前章节的标题="+
"header：Navigation or introductory elements for the current section.<br>当前章节的导航或引导性元素="+
"caption：Title of a table.<br>表格的标题="+
"td：Table cell.<br>表格单元格="+
"meta：Document metadata that can't be represented with other elements.<br>文档的元数据="+
"rt：Annotation of preceding text.<br>文本的解释="+
"dfn：Term being defined by the parent section.<br>由父级章节定义的项="+
"em：Text that should be emphasised.<br>需要强调的文本="+
"i：Text in a alternate voice or mood, such as a technical term.<br>斜体的文本="+
"small：An aside, such as fine print.<br>更小的旁注信息="+
"ins：Text that has been inserted during document editing.<br>在文档编辑过程中插入的文本="+
"s：Text that is outdated or no longer accurate.<br>失效或不再准确的文本="+
"br：Line break.<br>换行符="+
"p：Paragraph content.<br>段落内容="+
"blockquote：Quote from another source.<br>从其它源引用的内容="+
"legend：Define a name for a fieldset.<br>图例或表的说明="+
"optgroup：Group of option.<br>选项组="+
"address：Contact information for the current article.<br>当前文章的联系信息="+
"h3：Heading for the current section.<br>当前章节的标题="+
"nav：Contains a collection of links.<br>导航链接的容器="+
"menu：Set of commands.<br>菜单列表="+
"th：Table heading.<br>表头="+
"base：Specifies URL which non-absolute URLs are relative to.<br>定义非绝对的链接地址所相对的默认 URL="+
"rp：Contains semantically meaningless markup for browsers that don't understand ruby annotations.<br>针对不支持ruby 注音的浏览器，用于注释信息="+
"abbr：Abbreviation or acronym.<br>缩写或缩略词="+
"time：Time defined in a machine readable format.<br>时间="+
"b：Stylistically separated text of equal importance, such as a product name.<br>粗体文本，用于强调="+
"strong：Text that is important.<br>重要的文本="+
"del：Text that has been removed during document editing.<br>在编辑过程中被删除的文本="+
"kbd：Example input (usually keyboard) for a program.<br>由键盘输入的文本="+
"hr：Thematic break within a paragraph.<br>水平线/内容主题的变化="+
"ol：Ordered list.<br>有序列表="+
"dl：List of term-description pairs.<br>带定义的列表="+
"label：Caption for a form control.<br>表单控件的标题（标签）="+
"option：Single option within a select control.<br>下拉列表中的单一选项="+
"datalist：Define sets of options.<br>定义选项列表="+
"h4：Heading for the current section.<br>当前章节的标题="+
"article：Section of the page content, such as a blog or forum post.页面内容的独立部分，如博客文章、论坛帖子="+
"command：Command the user can perform, such as publishing an article.<br>用户可以执行的命令，如发表一篇文章="+
"tbody：Contains rows that hold the table's data.<br>表格主体="+
"link：Other resources related to the document.<br>与文档相关的其它资源="+
"noscript：Contains elements that are part of the document only if scripting is disabled.<br>当脚本被禁用时显示的一部分文档内容="+
"q：Quoted text.<br>引用的文本="+
"var：Mathematical or programming variable.<br>数学或程序变量="+
"sub：Subscript text.<br>上标="+
"mark：Text highlighted for referencing elsewhere.<br>突出显示的文本="+
"bdi：Text that is separated from directional formatting of its surroundings.<br>从周围内容分开，而设置不同的文本方向="+
"wbr：Opportunity for a line break.<br>软回车（必要时才回车）="+
"figcaption：Caption for a figure.<br>图片的标题，图题="+
"ul：Unordered list.<br>无序列表="+
"dt：Term which will be described.<br>带定义的列表中的项目="+
"input：Generic form input.<br>表单中的输入字段="+
"output：Contains the results of a calculation.<br>输出的结果="+
"keygen：Generates private-public key pairs.<br>="+
"h5：eading for the current section.<br>当前章节的标题="+
"footer：Footer of the current section.<br>当前章节的页脚="+
"summary：Caption of a details element.<br>dedails元素的标题="+
"thead：Contains rows with table headings.<br>表格中的表头行="+
"style：Styling defined inline data.<br>在文档中定义的样式="+
"script：Inline or linked client side scripts.<br>内部或外部链接的脚本="+
"cite：Title of a referenced piece of work.<br>对参考文献等的引用="+
"samp：Sample output of a program.<br>程序的样本="+
"sup：Superscript text.<br>下标="+
"ruby：Contains text with annotations, such as pronounciation hints. Commonly used in East Asian text.<br>东亚文字的注音，如中文的拼音="+
"bdo：Defines directional formatting for content.<br>定义内容的排版方向="+
"code：Fragment of code.<br>代码的片断="+
"figure：Contains elements related to single concept, such as an illustration or code example.<br>独立的内容，如图像、代码等="+
"li：List item.<br>列表项目="+
"dd：Description for the preceding term.<br>带定义列表中对项目的描述="+
"textarea：Multiline free-form text input.<br>多行的文本输入区域="+
"button：A button.<br>按钮="+
"progress：Control for displaying progress of a task.<br>运行中的进度控制="+
"h6：Heading for the current section.<br>当前章节的标题="+
"hgroup：Collection of headings for the current section. The highest ranked heading represents the group in the document outline.<br>当前章节各标题的组合="+
"details：Contains additional information, such as the contents of an accordian view.<br>附加的详细信息="+
"tfoot：Contains rows with summary of data.<br>表格的页脚/脚注行="+
"img：An image.<br>图像="+
"area：Hyperlink area in an image map.<br>图像映射的超链接区域="+
"map：Image map for adding hyperlinks to parts of an image.<br>在图像的一部分区域定义图像映射用于添加超链接="+
"embed：Reference to non-HTML content.<br>嵌入的非HTML内容="+
"object：External resource such as an image, iframe or plugin.<br>嵌入的外部资源，如图像、iframe或插件="+
"param：Parameters for the parent object.<br>父级对象的参数="+
"source：Alternative sources for parent video or audio elements.<br>父级视频或音频元素的资源="+
"iframe：Nested browser frame.<br>嵌套的框架="+
"canvas：Bitmap which is editable by client side scripts.<br>可以通过客户端脚本编辑的图形（画布）="+
"track：Specifies external timing track for media elements.<br>媒体类元素的外部轨道="+
"audio：Audio file.<br>音频文件="+
"video：Video.<br>";
var toatlList=news.split("=");
var arr=[];
for(var i=0;i<toatlList.length;i++){
    var nameLit=toatlList[i].split("：");
    var loop_tdList=document.getElementsByClassName("loop_td");
    loop_tdList[i].innerHTML=nameLit[0];
//    *******************************
//    用js原生实现一下
    loop_tdList[i].index=i;
    // console.log(index);
    loop_tdList[i].onmouseover=function () {
        this.style.animation="bounce 5s";
        var nameLit=toatlList[this.index].split("：");
        $("<div class='loop_div'>"+nameLit[1]+"<div>").appendTo($(this));
        $(".loop_div").css({"position":"absolute","width":"300px","height":"150px","top":"60px","background":"#fff",
            "z-index":"99999999999999999999","border-radius":"5px","text-align":"center","line-height":"40px","animation":" bounceInDown 15s"});
    }
//    写一个离开的事件
    loop_tdList[i].onmouseout=function () {
        $(".loop_div").remove();
    }

//     $(".loop_td").click(function(){
//         $("<div class='loop_div'>"+arr[i]+"<div>").appendTo($(this));
//         $(".loop_div").css({"position":"absolute","width":"300px","height":"150px","top":"60px","background":"#fff",
//             "z-index":"100","border-radius":"5px","text-align":"center","line-height":"100px"});
//     });
}
