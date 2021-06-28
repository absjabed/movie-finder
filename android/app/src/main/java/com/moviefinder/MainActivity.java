package com.moviefinder;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // Import this.
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {


  @Override
    protected void onCreate(Bundle savedInstanceState) {
        //Set your theme before super.onCreate() to replace your previous theme of Manifest
        //setTheme(R.style.AppTheme);
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_main);

        //TODO: add your MainActivity code here
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MovieFinder";
  }
}
