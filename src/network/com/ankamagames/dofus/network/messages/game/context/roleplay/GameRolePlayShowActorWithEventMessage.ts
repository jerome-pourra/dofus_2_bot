import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameRolePlayShowActorMessage } from "./GameRolePlayShowActorMessage";

export class GameRolePlayShowActorWithEventMessage extends GameRolePlayShowActorMessage
{

	public static readonly protocolId: number = 5;

	public actorEventId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayShowActorWithEventMessage(input);
    }

    private deserializeAs_GameRolePlayShowActorWithEventMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._actorEventIdFunc(input);
    }

    private _actorEventIdFunc(input: ICustomDataInput)
    {
        this.actorEventId = input.readByte();
        if(this.actorEventId < 0)
        {
            throw new Error("Forbidden value (" + this.actorEventId + ") on element of GameRolePlayShowActorWithEventMessage.actorEventId.");
        }
    }

}