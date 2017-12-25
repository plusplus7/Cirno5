using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cirno5.Models
{
    public sealed class BaseItemType
    {
        public static readonly BaseItemType Article = new BaseItemType("Article");
        public static readonly BaseItemType ArticleInfo = new BaseItemType("ArticleInfo");
        public static readonly BaseItemType IndexPageInfo = new BaseItemType("IndexPageInfo");

        public readonly string ItemType;

        public override string ToString()
        {
            return ItemType;
        }

        private BaseItemType(string itemType)
        {
            ItemType = itemType;
        }
    }
}
