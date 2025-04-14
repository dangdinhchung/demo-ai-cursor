# demo-ai-cursor

## Hướng dẫn cài đặt MCP Server

1. Tạo file `mcp.json` trong thư mục `.cursor` (thường nằm ở `C:\Users\<username>\.cursor\`)

2. Thêm nội dung sau vào file `mcp.json`:

```json
{
  "mcpServers": {
    "Framelink Figma MCP": {
      "url": "http://localhost:3333/sse",
      "env": {
        "FIGMA_API_KEY": "YOUR_FIGMA_API_KEY"
      }
    },
    "browser-tools": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@agentdeskai/browser-tools-mcp@1.2.0"
      ],
      "disabled": true,
      "autoApprove": [
        "getConsoleErrors",
        "getConsoleLogs"
      ],
      "timeout": 300
    },
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
      }
    }
  }
}
```

3. Thay thế các giá trị sau:
   - `YOUR_FIGMA_API_KEY`: Thay bằng Figma API key của bạn
   - `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`: Thay bằng GitHub Personal Access Token của bạn

4. Lưu file và khởi động lại Cursor IDE để áp dụng cấu hình mới.

## Lưu ý
- Đảm bảo bạn đã cài đặt Node.js trên máy tính
- Không chia sẻ các API key và token với người khác
- Nên lưu các key và token vào biến môi trường thay vì hard code trong file cấu hình