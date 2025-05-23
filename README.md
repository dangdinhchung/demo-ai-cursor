# demo-ai-cursor

## Yêu cầu hệ thống
- Node.js phiên bản 14.x trở lên
- Cursor IDE đã được cài đặt
- Git đã được cài đặt và cấu hình

## Hướng dẫn cài đặt MCP Server

### 1. Cài đặt Node.js
- Truy cập [Node.js official website](https://nodejs.org/)
- Tải và cài đặt phiên bản LTS mới nhất
- Kiểm tra cài đặt bằng lệnh:
  ```bash
  node --version
  npm --version
  ```

### 2. Cài đặt Cursor IDE
- Truy cập [Cursor IDE website](https://cursor.sh/)
- Tải và cài đặt phiên bản mới nhất
- Khởi động Cursor IDE

### 3. Cấu hình MCP Server

1. Tạo file `mcp.json` trong thư mục `.cursor`:
   - Windows: `C:\Users\<username>\.cursor\`
   - macOS/Linux: `~/.cursor/`

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

### 4. Lấy API Keys

#### GitHub Personal Access Token:
1. Truy cập [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Đặt tên và chọn các quyền cần thiết (repo, user)
4. Copy token và thay thế `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`

#### Figma API Key:
1. Truy cập [Figma Settings > Personal access tokens](https://www.figma.com/settings)
2. Click "Generate new access token"
3. Đặt tên cho token
4. Copy token và thay thế `YOUR_FIGMA_API_KEY`

### 5. Khởi động lại Cursor IDE
- Đóng hoàn toàn Cursor IDE
- Khởi động lại để áp dụng cấu hình mới

## Lưu ý quan trọng
- Không chia sẻ các API key và token với người khác
- Nên lưu các key và token vào biến môi trường thay vì hard code trong file cấu hình
- Đảm bảo file `mcp.json` có quyền truy cập phù hợp
- Nếu gặp lỗi, kiểm tra:
  - Node.js đã được cài đặt đúng cách
  - API keys và tokens còn hiệu lực
  - File `mcp.json` được định dạng JSON hợp lệ
  - Cursor IDE đã được khởi động lại sau khi cấu hình

## Hỗ trợ
Nếu bạn gặp vấn đề, vui lòng:
1. Kiểm tra logs trong Cursor IDE
2. Tạo issue trong repository này
3. Kiểm tra documentation của [Cursor IDE](https://cursor.sh/docs)