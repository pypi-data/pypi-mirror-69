# Notion-Calendar-Sync

The unofficial Notion API extended with the option to sync your Notion events to Google Calendar.

Want to support the development financially? Donations are always welcomed! 
<a href="https://liberapay.com/marcoEDU/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

## Installation

```
pip install notioncalendarsync
```

## Usage

YOUR NOTION TOKEN:

Obtain the `token_v2` value by inspecting your browser cookies on a logged-in session on Notion.so

```
from notioncalendarsync import Notion

Notion(token_v2="{{ YOUR NOTION TOKEN }}").add_events_to_google_calendar('{{ NOTION COLLECTION URL }}',timezone='Europe/Berlin')
```