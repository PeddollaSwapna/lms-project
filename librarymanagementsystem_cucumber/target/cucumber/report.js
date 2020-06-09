$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Registration with given details",
  "description": "",
  "id": "user-registration;user-registration-with-given-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \u003cfirstName\u003e,\u003clastName\u003e,\u003cemail\u003e,\u003cpassword\u003e,\u003cmobile\u003e,\u003crole\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-registration;user-registration-with-given-details;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "mobile",
        "role",
        "status"
      ],
      "line": 10,
      "id": "user-registration;user-registration-with-given-details;;1"
    },
    {
      "cells": [
        "\"suman\"",
        "\"reddy\"",
        "\"suman@gmail.com\"",
        "\"Suman@123\"",
        "9870987099",
        "\"admin\"",
        "\"registered successfully\""
      ],
      "line": 11,
      "id": "user-registration;user-registration-with-given-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 101699549257,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E59563+2725219]\n\tOrdinal0 [0x00D58551+1672529]\n\tOrdinal0 [0x00C40359+525145]\n\tOrdinal0 [0x00BD01A9+65961]\n\tOrdinal0 [0x00BCD2A8+53928]\n\tOrdinal0 [0x00BECC37+183351]\n\tOrdinal0 [0x00BECA3D+182845]\n\tOrdinal0 [0x00BEA94B+174411]\n\tOrdinal0 [0x00BD2528+75048]\n\tOrdinal0 [0x00BD35A0+79264]\n\tOrdinal0 [0x00BD3539+79161]\n\tOrdinal0 [0x00D6D607+1758727]\n\tGetHandleVerifier [0x00F76546+1050150]\n\tGetHandleVerifier [0x00F76291+1049457]\n\tGetHandleVerifier [0x00F810D7+1094071]\n\tGetHandleVerifier [0x00F76B46+1051686]\n\tOrdinal0 [0x00D65B06+1727238]\n\tOrdinal0 [0x00D6EB7B+1764219]\n\tOrdinal0 [0x00D6ECE3+1764579]\n\tOrdinal0 [0x00D84C05+1854469]\n\tBaseThreadInitThunk [0x7621338A+18]\n\tRtlInitializeExceptionChain [0x77C797F2+99]\n\tRtlInitializeExceptionChain [0x77C797C5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.RegisterSteps.openBrowser(RegisterSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 246528909156,
  "status": "passed"
});
formatter.before({
  "duration": 204083464143,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\windows\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59203}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9c13401027634f4d9425411d6c21c4f1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.UserSteps.openBrowser(UserSteps.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "User Registration with given details",
  "description": "",
  "id": "user-registration;user-registration-with-given-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"suman\",\"reddy\",\"suman@gmail.com\",\"Suman@123\",9870987099,\"admin\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be \"registered successfully\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.user_is_on_registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "suman",
      "offset": 13
    },
    {
      "val": "reddy",
      "offset": 21
    },
    {
      "val": "suman@gmail.com",
      "offset": 29
    },
    {
      "val": "Suman@123",
      "offset": 47
    },
    {
      "val": "9870987099",
      "offset": 58
    },
    {
      "val": "admin",
      "offset": 70
    }
  ],
  "location": "RegisterSteps.user_enters(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "registered successfully",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.user_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "User can request,return and able to view books",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books",
  "keyword": "Feature"
});
formatter.before({
  "duration": 178193413754,
  "status": "passed"
});
formatter.before({
  "duration": 548046586614,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E59563+2725219]\n\tOrdinal0 [0x00D58551+1672529]\n\tOrdinal0 [0x00C40359+525145]\n\tOrdinal0 [0x00C38579+492921]\n\tOrdinal0 [0x00C3818C+491916]\n\tOrdinal0 [0x00C37AB8+490168]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3F055+520277]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3D83E+514110]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3BBF6+506870]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3B1B7+504247]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3337C+471932]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C36A87+486023]\n\tOrdinal0 [0x00C40FF0+528368]\n\tOrdinal0 [0x00BED6C9+186057]\n\tOrdinal0 [0x00BECA3D+182845]\n\tOrdinal0 [0x00BEA94B+174411]\n\tOrdinal0 [0x00BD2528+75048]\n\tOrdinal0 [0x00BD35A0+79264]\n\tOrdinal0 [0x00BD3539+79161]\n\tOrdinal0 [0x00D6D607+1758727]\n\tGetHandleVerifier [0x00F76546+1050150]\n\tGetHandleVerifier [0x00F76291+1049457]\n\tGetHandleVerifier [0x00F810D7+1094071]\n\tGetHandleVerifier [0x00F76B46+1051686]\n\tOrdinal0 [0x00D65B06+1727238]\n\tOrdinal0 [0x00D6EB7B+1764219]\n\tOrdinal0 [0x00D6ECE3+1764579]\n\tOrdinal0 [0x00D84C05+1854469]\n\tBaseThreadInitThunk [0x7621338A+18]\n\tRtlInitializeExceptionChain [0x77C797F2+99]\n\tRtlInitializeExceptionChain [0x77C797C5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.AdminSteps.openBrowser(AdminSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 83908723637,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E59563+2725219]\n\tOrdinal0 [0x00D58551+1672529]\n\tOrdinal0 [0x00C40359+525145]\n\tOrdinal0 [0x00C38579+492921]\n\tOrdinal0 [0x00C3818C+491916]\n\tOrdinal0 [0x00C37AB8+490168]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3F055+520277]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3D83E+514110]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3BBF6+506870]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3B1B7+504247]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3337C+471932]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C36A87+486023]\n\tOrdinal0 [0x00C40FF0+528368]\n\tOrdinal0 [0x00BED6C9+186057]\n\tOrdinal0 [0x00BECA3D+182845]\n\tOrdinal0 [0x00BEA94B+174411]\n\tOrdinal0 [0x00BD2528+75048]\n\tOrdinal0 [0x00BD35A0+79264]\n\tOrdinal0 [0x00BD3539+79161]\n\tOrdinal0 [0x00D6D607+1758727]\n\tGetHandleVerifier [0x00F76546+1050150]\n\tGetHandleVerifier [0x00F76291+1049457]\n\tGetHandleVerifier [0x00F810D7+1094071]\n\tGetHandleVerifier [0x00F76B46+1051686]\n\tOrdinal0 [0x00D65B06+1727238]\n\tOrdinal0 [0x00D6EB7B+1764219]\n\tOrdinal0 [0x00D6ECE3+1764579]\n\tOrdinal0 [0x00D84C05+1854469]\n\tBaseThreadInitThunk [0x7621338A+18]\n\tRtlInitializeExceptionChain [0x77C797F2+99]\n\tRtlInitializeExceptionChain [0x77C797C5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.UserSteps.openBrowser(UserSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to request books",
  "description": "",
  "id": "user-can-request,return-and-able-to-view-books;user-should-be-able-to-request-books",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on request book page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on request button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Book Requested Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_request_book_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.user_clicks_on_request_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.book_Requested_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("userLogin.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User login with given details",
  "description": "",
  "id": "user-login;user-login-with-given-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \u003cemail\u003e,\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-login;user-login-with-given-details;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 10,
      "id": "user-login;user-login-with-given-details;;1"
    },
    {
      "cells": [
        "\"sathish@gmail.com\"",
        "\"Sathish@123\""
      ],
      "line": 11,
      "id": "user-login;user-login-with-given-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28820246239,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.RegisterSteps.openBrowser(RegisterSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:1517/status] to be available after 27769 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\t... 64 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:148)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 65 more\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 129199038307,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E59563+2725219]\n\tOrdinal0 [0x00D58551+1672529]\n\tOrdinal0 [0x00C40359+525145]\n\tOrdinal0 [0x00BD01A9+65961]\n\tOrdinal0 [0x00BCD2A8+53928]\n\tOrdinal0 [0x00BECC37+183351]\n\tOrdinal0 [0x00BECA3D+182845]\n\tOrdinal0 [0x00BEA94B+174411]\n\tOrdinal0 [0x00BD2528+75048]\n\tOrdinal0 [0x00BD35A0+79264]\n\tOrdinal0 [0x00BD3539+79161]\n\tOrdinal0 [0x00D6D607+1758727]\n\tGetHandleVerifier [0x00F76546+1050150]\n\tGetHandleVerifier [0x00F76291+1049457]\n\tGetHandleVerifier [0x00F810D7+1094071]\n\tGetHandleVerifier [0x00F76B46+1051686]\n\tOrdinal0 [0x00D65B06+1727238]\n\tOrdinal0 [0x00D6EB7B+1764219]\n\tOrdinal0 [0x00D6ECE3+1764579]\n\tOrdinal0 [0x00D84C05+1854469]\n\tBaseThreadInitThunk [0x7621338A+18]\n\tRtlInitializeExceptionChain [0x77C797F2+99]\n\tRtlInitializeExceptionChain [0x77C797C5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.AdminSteps.openBrowser(AdminSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 87700875783,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E59563+2725219]\n\tOrdinal0 [0x00D58551+1672529]\n\tOrdinal0 [0x00C40359+525145]\n\tOrdinal0 [0x00C38579+492921]\n\tOrdinal0 [0x00C3818C+491916]\n\tOrdinal0 [0x00C37AB8+490168]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3BC5F+506975]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3B1B7+504247]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C37739+489273]\n\tOrdinal0 [0x00C36EFE+487166]\n\tOrdinal0 [0x00C37135+487733]\n\tOrdinal0 [0x00C36B75+486261]\n\tOrdinal0 [0x00C3337C+471932]\n\tOrdinal0 [0x00C36B32+486194]\n\tOrdinal0 [0x00C36A87+486023]\n\tOrdinal0 [0x00C40FF0+528368]\n\tOrdinal0 [0x00BED6C9+186057]\n\tOrdinal0 [0x00BECA3D+182845]\n\tOrdinal0 [0x00BEA94B+174411]\n\tOrdinal0 [0x00BD2528+75048]\n\tOrdinal0 [0x00BD35A0+79264]\n\tOrdinal0 [0x00BD3539+79161]\n\tOrdinal0 [0x00D6D607+1758727]\n\tGetHandleVerifier [0x00F76546+1050150]\n\tGetHandleVerifier [0x00F76291+1049457]\n\tGetHandleVerifier [0x00F810D7+1094071]\n\tGetHandleVerifier [0x00F76B46+1051686]\n\tOrdinal0 [0x00D65B06+1727238]\n\tOrdinal0 [0x00D6EB7B+1764219]\n\tOrdinal0 [0x00D6ECE3+1764579]\n\tOrdinal0 [0x00D84C05+1854469]\n\tBaseThreadInitThunk [0x7621338A+18]\n\tRtlInitializeExceptionChain [0x77C797F2+99]\n\tRtlInitializeExceptionChain [0x77C797C5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.capgemini.librarymanagementsystem_cucumber.stepdefinitions.UserSteps.openBrowser(UserSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "User login with given details",
  "description": "",
  "id": "user-login;user-login-with-given-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sathish@gmail.com\",\"Sathish@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.user_is_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish@gmail.com",
      "offset": 13
    },
    {
      "val": "Sathish@123",
      "offset": 33
    }
  ],
  "location": "UserSteps.user_enters(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.user_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
});