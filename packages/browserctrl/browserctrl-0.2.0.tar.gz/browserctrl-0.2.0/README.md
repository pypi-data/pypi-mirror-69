# browserctrl

Control the browser behavior automaticly.

## Install

```
pip install browserctrl
```

## Installed Commands

- browserctrl

## Usage

```
C:\Workspace\browserctrl>browserctrl --help
Usage: browserctrl [OPTIONS] COMMAND [ARGS]...

  Browser automation toolset.

Options:
  --help  Show this message and exit.

Commands:
  create-xlsx-template  Create a new xlsx file with command define...
  run-xlsx-config       Run browser automation commands defined in...

C:\Workspace\browserctrl>browserctrl run-xlsx-config --help
Usage: browserctrl run-xlsx-config [OPTIONS] CONFIG_XLSX_PATH
                                   [VARIABLES_YML_PATH]

  Run browser automation commands defined in xlsx file.

Options:
  -s, --sheet TEXT
  --help            Show this message and exit.

C:\Workspace\browserctrl>browserctrl create-xlsx-template --help
Usage: browserctrl create-xlsx-template [OPTIONS] [OUTPUT]

  Create a new xlsx file with command define template.

Options:
  --help  Show this message and exit.

```

## Examples

1. Create a new xlsx template.

  ```
  browserctrl create-xlsx-template my-task.xlsx
  ```

2. Edit my-task.xlsx, add commands.
3. Run commands in my-task.xlsx.

  ```
  browserctrl run-xlsx-config my-task.xlsx
  ```

4. If there are variables used in my-task.xlsx, write variables in variables.yml, and pass the filename to run command.

  ```
  browserctrl run-xlsx-config my-task.xlsx variables.yml
  ```

**Note:**

1. See more help information in xlsx template which can be created by the sub-command create-xlsx-template.
1. You have to install phantomjs, webdriver for chrome, firefox and ie by yourself.
  - Chrome webdriver can be downloaded at https://sites.google.com/a/chromium.org/chromedriver/downloads.
  - IE webdriver can be downloaded at https://www.selenium.dev/downloads/.
  - Firefox webdriver can be downloaded at https://github.com/mozilla/geckodriver/releases.

## Releases

### v0.2.0 2020/06/01

- Use xlsx variables file instead of yml variables file.

### v0.1.4 2020/05/30

- Add --no-sandbox option for chrome so that we can start chrome under root user.
- Fix third counter problem in wait_and_monitoring.
- Auto close browser after the instance is destroyed.

### v0.1.3 2020/05/30

- Fix variables problem in wait_and_monitoring.
- Update document.

### v0.1.2 2020/05/29

- Add headless chrome browser support.
- Fix second counter problem in wait_and_monitoring.
- Fix screenshot problem creating empty folder.
- Fix Ie Browser zoom level not 100% problem.
- Ignore lines without operation.

### v0.1.1 2020/05/29

- Add instance_start_delay parameter for run_xlsx_config.
- Add StreamHandler() for logging.
- Update interval status before sleep in wait_and_monitoring.
- Fix counter screenshot filename problem in wait_and_monitoring.

### v0.1.0 2020/05/29

- First release.
