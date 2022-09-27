package com.project.project_backend.file;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

@Component
public class MyCorsFilter implements Filter {

    public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        chain.doFilter(req, res);

    }

    public void init(FilterConfig filterConfig) {
    }

    public void destroy() {
    }
//
//    @Override
//    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
//        log.debug("【过滤器】:进入到过滤器-》");
//        HttpServletResponse httpResponse = (HttpServletResponse) res;
//        httpResponse.setHeader("Access-Control-Allow-Origin", "*");  // 允许跨域的地址为所有
//        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,X-App-Id, X-Token");
//        httpResponse.addHeader("Access-Control-Max-Age", "3600");  // 非简单请求，只要第一次通过OPTIONS检查 在1小时之内不会在调用OPTIONS进行检测
//        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");  // 带有Cookie的跨域请求，此值必须设置为true。
//        if (((HttpServletRequest) req).getMethod().equals("OPTIONS")) {
//            httpServletResponse.setStatus(200);
//            return;
//        }
//        chain.doFilter(req, httpResponse);
//    }

}