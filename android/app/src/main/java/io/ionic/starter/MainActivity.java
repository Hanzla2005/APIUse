package io.ionic.starter;

import android.os.Bundle;

import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public List<Class<? extends Plugin>> getPlugins() {
    List<Class<? extends Plugin>> plugins = new ArrayList<>();
    plugins.add(GoogleAuth.class);
    return plugins;
  }
}
