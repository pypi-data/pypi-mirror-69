"""Mock interface to a Huber bath."""

import asyncio
from random import random, choice
from unittest.mock import MagicMock

from huber.driver import Bath as realBath


class Bath(MagicMock):
    """Mock interface to a Huber bath."""

    def __init__(self, *args, **kwargs):
        """Init fixed variables."""
        super().__init__(spec=realBath)
        self.temp_setpoint = 50
        self.pump_setpoint = 500
        self.on = False

    async def __aenter__(self, *args):
        """Set up connection."""
        return self

    async def __aexit__(self, *args):
        """Close connection."""
        pass

    async def get(self):
        """Return data structure randomly populated."""
        await asyncio.sleep(random() * 0.25)
        return {
            'on': self.on,  # Temperature control (+pump) active
            'temperature': {
                'internal': 23.49,  # Internal temperature, °C
                'setpoint': self.temp_setpoint  # Temperature setpoint, °C
            },
            'pump': {
                'pressure': random() * 1000,  # Pump head pressure, mbar
                'speed': random() * 1000,  # Pump speed, rpm
                'setpoint': self.pump_setpoint  # Pump speed setpoint, rpm
            },
            'status': {
                'circulating': choice([False, True]),  # True if device is circulating
                'controlling': choice([False, True]),  # True if temperature control is active
                'error': False,  # True if an uncleared error is present
                'pumping': choice([False, True]),  # True if pump is on
                'warning': False,  # True if an uncleared warning is present
            },
            'fill': random(),  # Oil level, [0, 1]
            'maintenance': random()*365,  # Time until maintenance alarm, days
        }

    async def start(self):
        """Start the controller and pump."""
        await asyncio.sleep(random())
        self.on = True

    async def stop(self):
        """Stop the controller and pump."""
        await asyncio.sleep(random() * 0.25)
        self.on = False

    async def get_setpoint(self, *args, **kwargs):
        """Return setpoint."""
        return (await self.get())['temperature']['setpoint']

    async def set_setpoint(self, value):
        """Set the temperature setpoint of the bath, in C."""
        await asyncio.sleep(random() * 0.25)
        self.temp_setpoint = value

    async def get_bath_temperature(self):
        """Get the internal temperature of the bath, in C."""
        return (await self.get())['temperature']['internal']

    async def get_pump_pressure(self):
        """Get the bath pump outlet pressure, in mbar."""
        return (await self.get())['pump']['pressure']

    async def get_pump_speed(self):
        """Get the bath pump speed, in RPM."""
        return (await self.get())['pump']['speed']

    async def set_pump_speed(self, value):
        """Set the bath pump speed, in RPM."""
        await asyncio.sleep(random() * 0.25)
        self.pump_setpoint = value

    async def get_fill_level(self):
        """Get the thermostat fluid fill level, in [0, 1]."""
        return (await self.get()).get('fill')

    async def get_next_maintenance(self):
        """Get the number of days until next maintenance alarm."""
        return (await self.get()).get('maintenance')

    async def get_status(self):
        """Get bath status indicators. Useful for triggering alerts."""
        return (await self.get())['status']

    async def get_error(self):
        """Get the most recent error, as a dictionary."""
        return (await self.get()).get('error')

    async def get_warning(self):
        """Get the most recent warning, as a dictionary."""
        return (await self.get()).get('warning')
