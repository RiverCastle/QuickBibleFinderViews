package JesusDisciples.QuickBibleFinderViews.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/home")
    public String getHome() {
        return "home";
    }

    @GetMapping("/message")
    public String getMessagePage() {
        return "message";
    }

    @GetMapping("/monitor")
    public String getMonitoringPage() {
        return "monitoring";
    }
}