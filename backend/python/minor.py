import requests
import urllib.parse
import pandas as pd
import re
from bs4 import BeautifulSoup

def clean_name(html_name):
    return BeautifulSoup(html_name, "html.parser").text


def parse_age(age_str):
    # "33-33" 33
    if isinstance(age_str, str) and "-" in age_str:
        return int(age_str.split("-")[0])
    return age_str


def transform_player(p):
    return {
        "Name": clean_name(p.get("Name")),
        "Age": parse_age(p.get("MaxAge", p.get("Age"))),

        # IDs
        "mlbID": p.get("xMLBAMID"),

        # Level + team
        "Lev": p.get("aLevel"),
        "Tm": p.get("PlayerName", p.get("AffAbbName")),
        "team_abbr": f"{p.get('AffAbbName','')}{p.get('aLevel','')}",

        # hitting stats
        "PA": p.get("PA"),
        "AB": p.get("AB"),
        "R": p.get("R"),
        "H": p.get("H"),
        "1B": p.get("1B"),
        "2B": p.get("2B"),
        "3B": p.get("3B"),
        "HR": p.get("HR"),
        "RBI": p.get("RBI"),
        "BB": p.get("BB"),
        "K": p.get("SO"),
        "SB": p.get("SB"),
        "CS": p.get("CS"),

        # rate stats
        "AVG": p.get("AVG"),
        "OBP": p.get("OBP"),
        "SLG": p.get("SLG"),

        # extras
        "position": p.get("positionDB"),
    }


def to_dataframe(api_data):
    rows = api_data.get("data", api_data)  # handles both formats

    cleaned = [transform_player(p) for p in rows]

    return pd.DataFrame(cleaned)

BASE_URL = "https://www.fangraphs.com/api/leaders/minor-league/data?pos=all&level=0&lg=2,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,30,32&stats={is_bat}&qual=y&type=0&team=&season={start_dt}&seasonEnd={end_dt}&org=&ind=0&splitTeam=false"


def get_minor_stats(is_bat, start_dt, end_dt):
    url = BASE_URL.format(is_bat = ("bat" if is_bat else "pit"), start_dt=start_dt, end_dt=end_dt)
    try:
        response = requests.get(url)
        response.raise_for_status()  # raises error if bad status

        data = response.json()
        # print(data[0])
        df = to_dataframe(data[0])

        print(df.head())
    except requests.RequestException as e:
        print(f"Failed : {e}")

get_minor_stats(True, 2025, 2026)
