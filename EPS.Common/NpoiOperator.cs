using NPOI.XWPF.UserModel;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.Common
{
    public class NpoiOperator
    {
        /// <summary>
        /// 导出Word流
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/24 17:04
        /// 修改者：
        /// 修改时间：
        public static MemoryStream ExportWordStream()
        {
            NpoiMemoryStream stream = new NpoiMemoryStream
            {
                AllowClose = false
            };

            //创建新的word文档
            XWPFDocument doc = new XWPFDocument();

            //一级标题
            XWPFParagraph title1 = doc.CreateParagraph();
            title1.Alignment = ParagraphAlignment.CENTER;   //段落对其方式为居中

            //向该段落中添加文字
            XWPFRun title1_Text = title1.CreateRun();
            title1_Text.SetText("一级标题");
            title1_Text.FontSize = 22; //设置字体大小
            title1_Text.IsBold = true; //设置粗体

            //二级标题1
            XWPFParagraph title2_1 = doc.CreateParagraph();
            title2_1.Alignment = ParagraphAlignment.LEFT;

            XWPFRun title2_1_Text = title2_1.CreateRun();
            title2_1_Text.SetText("二级标题1");
            title2_1_Text.FontSize = 16;
            title2_1_Text.IsBold = true;

            //段落1
            XWPFParagraph p1 = doc.CreateParagraph();
            p1.Alignment = ParagraphAlignment.LEFT;
            p1.FirstLineIndent = GetIndentation(24, 2);

            XWPFRun p1_Text = p1.CreateRun();
            p1_Text.SetText("段落1");
            p1_Text.FontSize = 12;
            p1_Text.IsBold = false;

            //二级标题2
            XWPFParagraph title2_2 = doc.CreateParagraph();
            title2_2.Alignment = ParagraphAlignment.LEFT;

            XWPFRun title2_2_Text = title2_2.CreateRun();
            title2_2_Text.SetText("二级标题2");
            title2_2_Text.FontSize = 16;
            title2_2_Text.IsBold = true;

            //二级标题3
            XWPFParagraph title2_3 = doc.CreateParagraph();
            title2_3.Alignment = ParagraphAlignment.LEFT;

            XWPFRun title2_3_Text = title2_3.CreateRun();
            title2_3_Text.SetText("二级标题3");
            title2_3_Text.FontSize = 16;
            title2_3_Text.IsBold = true;


            doc.Write(stream);
            doc.Close();
            stream.Flush();
            stream.Seek(0, SeekOrigin.Begin);
            stream.AllowClose = true;

            return stream;
        }

        /// <summary>
        /// 计算缩进
        /// </summary>
        /// <param name="fontName">字体</param>
        /// <param name="fontSize">字体大小</param>
        /// <param name="IndentationFonts">缩进字符数</param>
        /// <param name="fs">字体风格（常规、斜体、加粗...）</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/24 17:47
        /// 修改者：
        /// 修改时间：
        private static int GetIndentation(int fontSize, int IndentationFonts)
        {
            //字显示宽度，用于段首行缩进

            //字号与fontSize关系

            //初号（0号）=84，小初=72，1号=52，2号=44，小2=36，3号=32，小3=30，4号=28，

            //小4=24，5号=21，小5=18，6号=15，小6=13，7号=11，8号=10

            return fontSize * IndentationFonts * 10;
        }
    }
}
