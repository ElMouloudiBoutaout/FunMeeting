package com.quiz.configurations;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class GatewayFilter extends GenericFilter {

    @Value("${gateway.url:localhost:8080}")
    private String gatewayURL;

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) resp;

        String proxyForwardedHostHeader = request.getHeader("X-Forwarded-Host");

        if (proxyForwardedHostHeader == null || !proxyForwardedHostHeader.equals(gatewayURL)) {

            byte[] responseToSend = restResponseBytes("Unauthorized Access, Unauthorized Access, you should pass through the API gateway");
            ((HttpServletResponse) response).setHeader("Content-Type", "application/json");
            ((HttpServletResponse) response).setStatus(401);
            response.getOutputStream().write(responseToSend);
            return;
        }
        chain.doFilter(request, response);
    }

    private byte[] restResponseBytes(String errorResponse) throws IOException {
        String serialized = new ObjectMapper().writeValueAsString(errorResponse);
        return serialized.getBytes();
    }
}