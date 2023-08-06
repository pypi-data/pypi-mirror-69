# mautrix-facebook - A Matrix-Facebook Messenger puppeting bridge
# Copyright (C) 2019 Tulir Asokan
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
from typing import Optional, Iterable, List

from sqlalchemy import Column, String, SmallInteger, UniqueConstraint, and_

from mautrix.types import RoomID, EventID
from mautrix.util.db import Base


class Message(Base):
    __tablename__ = "message"

    mxid: EventID = Column(String(255))
    mx_room: RoomID = Column(String(255))
    fbid: str = Column(String(127), primary_key=True)
    fb_receiver: str = Column(String(127), primary_key=True)
    index: int = Column(SmallInteger, primary_key=True, default=0)

    __table_args__ = (UniqueConstraint("mxid", "mx_room", name="_mx_id_room"),)

    @classmethod
    def get_all_by_fbid(cls, fbid: str, fb_receiver: str) -> Iterable['Message']:
        return cls._select_all(cls.c.fbid == fbid, cls.c.fb_receiver == fb_receiver)

    @classmethod
    def get_by_fbid(cls, fbid: str, fb_receiver: str, index: int = 0) -> Optional['Message']:
        return cls._select_one_or_none(and_(cls.c.fbid == fbid, cls.c.fb_receiver == fb_receiver,
                                            cls.c.index == index))

    @classmethod
    def get_by_mxid(cls, mxid: EventID, mx_room: RoomID) -> Optional['Message']:
        return cls._select_one_or_none(and_(cls.c.mxid == mxid, cls.c.mx_room == mx_room))

    @classmethod
    def bulk_create(cls, fbid: str, fb_receiver: str, event_ids: List[EventID], mx_room: RoomID
                    ) -> None:
        if not event_ids:
            return
        with cls.db.begin() as conn:
            conn.execute(cls.t.insert(),
                         [dict(mxid=event_id, mx_room=mx_room, fbid=fbid, fb_receiver=fb_receiver,
                               index=i)
                          for i, event_id in enumerate(event_ids)])
