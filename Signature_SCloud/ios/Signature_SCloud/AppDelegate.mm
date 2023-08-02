#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

#import "RNSplashScreen.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Signature_SCloud";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  bool didFinish = [super application:application didFinishLaunchingWithOptions:launchOptions];
  [RNSplashScreen show];  // here
  return didFinish;
//  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
